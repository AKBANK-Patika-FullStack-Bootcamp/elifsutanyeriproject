import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AdminNavbar from '../../Components/AdminNavbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { withRouter } from 'react-router-dom';


function AdminPage() {

  const [users, setUsers] = useState("");

  const url = "http://localhost:5000/api/Admin/userInfo";
  
  const getData = () => {
    const token = localStorage.getItem('token');
      axios.get(url, { headers:{
        'Authorization': `bearer ${token}`}})
      .then((response) => setUsers(response.data));
      
  }



  return (
      <>
      <AdminNavbar />

      

      <div>
        <button onClick={getData}>
          Tüm Kullanıcı Bilgilerini Getir
         </button>
         <br />
       </div>

      
      
        
               
          

<div>

            
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Adı</TableCell>
            <TableCell align="right">Soyadı</TableCell>
            <TableCell align="right">Kullanıcı Adı</TableCell>
            <TableCell align="right">Tc Kimlik Numarası</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
          users.map((user, index) => (
            
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {users.id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.surname}</TableCell>
              <TableCell align="right">{user.userName}</TableCell>
              <TableCell align="right">{user.tc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
</>
)}

export default withRouter(AdminPage);
          