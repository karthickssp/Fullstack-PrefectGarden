import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../Service/ApiService';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextField from '@mui/material/TextField';
import '../assets/styles/GetData.css';

const columns = [
  { id: 'commonName', label: 'Common Name', minWidth: 170 },
  { id: 'scientificName', label: 'Scientific Name', minWidth: 170 },
  { id: 'plantFamily', label: 'Plant Family', minWidth: 170 },
  { id: 'plantingSeason', label: 'Planting Season', minWidth: 170 },
  { id: 'averageRating', label: 'Average Rating', minWidth: 100 },
];

const GetData = () => {
  const Service = useMemo(() => new ApiService(), []);
  const [plantList, setPlantList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [searchTermCommonName, setSearchTermCommonName] = useState('');
  const [searchTermScientificName, setSearchTermScientificName] = useState('');
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const getAllPlants = useCallback(() => {
    Service.getAllPlant()
      .then((response) => {
        setPlantList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Service]);

  useEffect(() => {
    getAllPlants();
  }, [getAllPlants]);

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
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredPlantList = plantList.filter((plant) => {
    const lowerCaseSearchTermCommonName = searchTermCommonName.toLowerCase();
    const lowerCaseSearchTermScientificName = searchTermScientificName.toLowerCase();
    return (
      plant.commonName.toLowerCase().includes(lowerCaseSearchTermCommonName) &&
      plant.scientificName.toLowerCase().includes(lowerCaseSearchTermScientificName)
    );
  });

  const sortedPlantList = filteredPlantList.sort((a, b) => {
    if (sortedColumn) {
      const valueA = typeof a[sortedColumn] === 'string'
        ? a[sortedColumn].toLowerCase()
        : a[sortedColumn];
      const valueB = typeof b[sortedColumn] === 'string'
        ? b[sortedColumn].toLowerCase()
        : b[sortedColumn];

      if (valueA < valueB) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortDirection === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <div>
      <div id="topic">
        <Link to="/home" style={{ textDecoration: 'none' }}><h2>PLANTOPIA</h2></Link>
        <h2>Explore Plants!</h2>
        <div id="add_actions-container">
          <Link to="/">
            <button id="add_actions">Logout</button>
          </Link>
        </div>
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
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 572, minHeight: 572}}>
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
                        <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={index} >
                    {columns.map((column) => {
                      const value = plant[column.id];
                      return (
                        <TableCell key={column.id} align="center" >
                          {column.id !== 'actions' ? (
                            value
                          ) : (
                            <>
                              <Link to={`/view/${plant.plantId}`}>
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
        <TablePagination sx={{ width: '100%', overflow: 'hidden' }}
          rowsPerPageOptions={[6, 9, 12, 15, 20]}
          component="div"
          count={filteredPlantList.length}
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