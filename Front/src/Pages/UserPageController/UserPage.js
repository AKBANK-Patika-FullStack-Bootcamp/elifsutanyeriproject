import { withRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "react-bootstrap";
import '../../App.css';

function UserPage() {

const userId = localStorage.getItem("userId");
const [user, setUser] = useState();
const [bills, setBills] = useState();

const url = "http://localhost:5000/api/Users";


const getData = () => {
    const token = localStorage.getItem('token');
    const headers = {
    'Authorization': `bearer ${token}`,
    'id': `${userId}`}

    axios.get(url, {headers: headers})
    .then((response) => setUser(response.data));

    axios.get(`${url}/userBillInfo?id=${userId}`, {headers: headers})
    .then((response) => setBills(response.data))
}


    useEffect(() => {
        getData()
      }, []);

    return (
    <>
       

        <div className="usercontainer">
           <h1>Hoşgeldiniz!</h1>
        <div className="card card-container usercard f">
        {user &&
          user.map((usr, index) => (
            
            <div key={index}>
              <p>Adı: {usr.name} </p>
              <p>Soyadı: {usr.surname}</p>
              <p>Kullanıcı Adı: {usr.userName}</p>
              <p>TC Kimlik Numarası:    {usr.tc}</p>
              <p>E-mail Adresi:  {usr.email}</p>
              <p>Telefon Numarası:  {usr.phone}</p>
              <p>Araç Plakası:  {usr.car}</p>
            </div>
          ))}
          </div>
            

        <div className="card card-container usercard s">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Tarih</TableCell>
            <TableCell align="right">Elektrik</TableCell>
            <TableCell align="right">Su</TableCell>
            <TableCell align="right">Doğalgaz</TableCell>
            <TableCell align="right">Aidat</TableCell>
            <TableCell align="right">Ödendi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bills &&
          bills.map((bill, index) => (
            
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {bill.id}
              </TableCell>
              <TableCell align="right">{bill.month}</TableCell>
              <TableCell align="right">{bill.electricity}</TableCell>
              <TableCell align="right">{bill.water}</TableCell>
              <TableCell align="right">{bill.gas}</TableCell>
              <TableCell align="right">{bill.due}</TableCell>
              <TableCell align="right">{bill.isPaid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            <Button className="paybtn">Ödeme Yap</Button>
        </div>  
        </div>
    </>
    )
}
export default withRouter(UserPage);