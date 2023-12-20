/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import PlantService from "../../Service/PlantService";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField from "@mui/material/TextField";
import "../../assets/styles/GetData.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#d3e1e2",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const columns = [
  { id: "commonName", label: "Common Name", minWidth: 170 },
  { id: "scientificName", label: "Scientific Name", minWidth: 170 },
  { id: "plantFamily", label: "Plant Family", minWidth: 170 },
  { id: "plantingSeason", label: "Planting Season", minWidth: 170 },
  { id: "action", label: "View", minWidth: 100 },
];

const Explore = () => {
  const service = new PlantService();
  const user = useSelector(selectUser);
  let isLoggedIn = false;
  const [plantList, setPlantList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [searchTermCommonName, setSearchTermCommonName] = useState("");
  const [searchTermScientificName, setSearchTermScientificName] = useState("");
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleViewClick = (plant) => {
    setSelectedPlant(plant);
    handleOpen();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const GetAllPlants = async () => {
    try {
      const response = await service.getAllPlants();
      setPlantList(response.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  if (user.username || user.user.username) {
    isLoggedIn = true;
    useEffect(() => {
      GetAllPlants();
    }, []);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchCommonName = (e) => {
    setSearchTermCommonName(e.target.value);
  };

  const handleSearchScientificName = (e) => {
    setSearchTermScientificName(e.target.value);
  };

  const handleSort = (column) => {
    if (column === sortedColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredPlantList = plantList.filter((plant) => {
    const lowerCaseSearchTermCommonName = searchTermCommonName.toLowerCase();
    const lowerCaseSearchTermScientificName =
      searchTermScientificName.toLowerCase();
    return (
      plant.commonName.toLowerCase().includes(lowerCaseSearchTermCommonName) &&
      plant.scientificName
        .toLowerCase()
        .includes(lowerCaseSearchTermScientificName)
    );
  });

  const sortedPlantList = filteredPlantList.sort((a, b) => {
    if (sortedColumn) {
      const valueA =
        typeof a[sortedColumn] === "string"
          ? a[sortedColumn].toLowerCase()
          : a[sortedColumn];
      const valueB =
        typeof b[sortedColumn] === "string"
          ? b[sortedColumn].toLowerCase()
          : b[sortedColumn];

      if (valueA < valueB) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortDirection === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <>
      {isLoggedIn ? (
        <div style={{ backgroundColor: "#d3e1e2" }}>
          <center>
            <span className="title">Explore Plants!</span>
          </center>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  Plant Detail:
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {selectedPlant && (
                    <div className="plant-details">
                      <div>
                        <strong>Name:</strong> {selectedPlant.commonName}
                      </div>
                      <div>
                        <strong>Description:</strong>{" "}
                        {selectedPlant.description}
                      </div>
                      <div>
                        <strong>Harvesting Age:</strong>{" "}
                        {selectedPlant.harvestingAge}
                      </div>
                      <div>
                        <strong>Season Condition:</strong>{" "}
                        {selectedPlant.plantingSeason}
                      </div>
                      <div>
                        <strong>Growing Condition:</strong>{" "}
                        {selectedPlant.growingConditions}
                      </div>
                      <div>
                        <strong>Water Consumption:</strong>{" "}
                        {selectedPlant.wateringNeeds}
                      </div>
                      <div>
                        <strong>Maintenance:</strong>{" "}
                        {selectedPlant.maintenance}
                      </div>
                      <div>
                        <strong>Plant Type:</strong> {selectedPlant.plantType}
                      </div>
                      <div>
                        <strong>Plant Family:</strong>{" "}
                        {selectedPlant.plantFamily}
                      </div>
                    </div>
                  )}
                </Typography>
              </Box>
            </Modal>
          </div>
          <div className="search-container-wrapper">
            <div className="search-container">
              <TextField
                type="text"
                label="Search by common name"
                value={searchTermCommonName}
                onChange={handleSearchCommonName}
              />
            </div>
            <div className="search-container">
              <TextField
                type="text"
                label="Search by scientific name"
                value={searchTermScientificName}
                onChange={handleSearchScientificName}
              />
            </div>
          </div>
          <Paper
            sx={{ width: "100%", overflow: "hidden" }}
            style={{ backgroundColor: "#d3e1e2" }}
          >
            <TableContainer sx={{ maxHeight: 572, minHeight: 572 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align="center"
                        style={{ minWidth: column.minWidth }}
                      >
                        <div
                          className="table-header"
                          onClick={() => handleSort(column.id)}
                        >
                          <span>{column.label}</span>
                          {sortedColumn === column.id && (
                            <span>{sortDirection === "asc" ? "▲" : "▼"}</span>
                          )}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedPlantList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((plant, index) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = plant[column.id];
                          return (
                            <TableCell key={column.id} align="center">
                              {column.id !== "action" ? (
                                value
                              ) : (
                                <>
                                  <button
                                    id="view_action"
                                    onClick={() => {
                                      handleViewClick(plant);
                                    }}
                                  >
                                    <VisibilityIcon />
                                  </button>
                                </>
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              sx={{ width: "100%", overflow: "hidden" }}
              rowsPerPageOptions={[7, 10, 15, 20]}
              component="div"
              count={filteredPlantList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      ) : (
        <div className="plant-back">
          <div className="plant-details">
            <center>
              <h2>PLANT DETAILS</h2>
              <p>Login to display the information.</p>
              <Link to="/login">
                <button className="l-button">Login</button>
              </Link>
            </center>
          </div>
        </div>
      )}
    </>
  );
};

export default Explore;
