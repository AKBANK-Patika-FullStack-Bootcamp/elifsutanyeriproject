import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import authAxios from '../../App'
import AdminNavbar from '../../Components/AdminNavbar';


export default function AdminPage() {

  const [users, setUsers] = useState("");

  const url = "http://localhost:5000/api/Admin/userInfo";
  
  const getData = () => {
   const token = localStorage.getItem('token');
      axios.get(url, { headers: {'Authorization': "bearer " + token,
      'Content-Type': 'application/json',} }
      );
    
  };



  return (
      <>
      <AdminNavbar />

      

  <div>
        <button onClick={getData}>
          Tüm Kullanıcı Bilgilerini Getir
         </button>
         <br />
       </div>

      
      
        {users &&
          users.map((user, index) => {
            ;

            return (
              <div key={index}>
                <h3>User {index + 1}</h3>
                <h2>{user.name}</h2>
                  <p>{user.Surname}</p>
                  <p>{user.TC}</p>
              </div>
            );
          })}
  </>
)};