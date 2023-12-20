import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const columns = [
  { id: "plantId", label: "Plant Number", minWidth: 120 },
  { id: "commonName", label: "Plant Name", minWidth: 170 },
  { id: "scientificName", label: "Scientific Name", minWidth: 170 },
  { id: "plantType", label: "Plant Type", minWidth: 170 },
  { id: "plantingSeason", label: "Plant Season", minWidth: 170 },
  { id: "actions", label: "View", minWidth: 120 },
];

const GetData = () => {
  const service = new PlantService();
  const user = localStorage.getItem("admin_email");
  const navigate = useNavigate();
  const [plantList, setPlantList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [searchTermCommonName, setSearchTermCommonName] = useState("");
  const [searchTermPlantType, setSearchTermPlantType] = useState("");

  const getAllPlants = async () => {
    try {
      const response = await service.getAllPlant();
      setPlantList(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if(user){
    getAllPlants();
    }else{
      alert("Login First!!!");
      navigate("/admin")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleSearchPlantType = (e) => {
    setSearchTermPlantType(e.target.value);
  };

  const filteredBookList = plantList.filter((plant) => {
    const lowerCaseSearchTermCommonName = searchTermCommonName.toLowerCase();
    const lowerCaseSearchTermPlantType = searchTermPlantType.toLowerCase();
    return (
      plant.commonName.toLowerCase().includes(lowerCaseSearchTermCommonName) &&
      plant.plantType.toLowerCase().includes(lowerCaseSearchTermPlantType)
    );
  });

  return (
    <div className="get-back">
      <div id="topic">
        <Link to="/admin" id="topic1"><h2>PREFECT GARDEN</h2></Link>
        <h2>List of Plants!</h2>
        <div id="add_actions-container">
          <Link to="/admin/add">
            <button id="add_actions">Add</button>
          </Link>
        </div>
      </div>

      <div className="search-container-wrapper">
        <div className="search-container">
          <TextField
            type="text"
            label="Search by Plant Name"
            value={searchTermCommonName}
            onChange={handleSearchCommonName}
          />
        </div>
        <div className="search-container">
          <TextField
            type="text"
            label="Search by Plant Type"
            value={searchTermPlantType}
            onChange={handleSearchPlantType}
          />
        </div>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden" ,background: "#d3e1e2"}}>
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
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBookList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((plantlist, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = plantlist[column.id];
                      return (
                        <TableCell key={column.id} align="center">
                          {column.id !== "actions" ? (
                            value
                          ) : (
                            <>
                              <Link to={`/admin/view/${plantlist.plantId}`}>
                                <button id="view_action">
                                  <VisibilityIcon />
                                </button>
                              </Link>
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
          rowsPerPageOptions={[5, 7, 10, 15, 20]}
          component="div"
          count={filteredBookList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default GetData;
