import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function App() {
  const API_URL = "http://localhost:5000/api/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(null);




  const login = () => {
    let token;
    axios.post(API_URL + "Authentication/login",
    {
      username, password
    }).then(response => {
      token = localStorage.setItem("token", response.data.token);
      console.log(response.data);
      if (response.status === 200){
        setIsAdmin(response.data.isAdmin);
      }
    });
  };

  const authAxios = () => {
  const token = localStorage.getItem('token');
    axios.create({
      baseURL: API_URL + "Admin",
      timeout: 5000000,
      headers: {
        //burda bearer + demem gerekebilir bakıcaz
        'Authorization': token,
        'Content-Type': 'application/json',
        
      }
    }); 
  }

 

  



  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    login();
  }
  

  return (
    <>
    {isAdmin == null ?
     <div className="Login">
    <div className="card card-container">        
       <Form onSubmit={handleSubmit} className="loginform">
        <Form.Group size="lg" controlId="username">
          <Form.Label>Kullanıcı Adı</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Şifre</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
         <Button block size="lg" type="submit" disabled={!validateForm()}>
          Giriş Yap
        </Button> 
        
        <p className="register-text">Hesabınız yoksa <Link to="/register">üye olun</Link></p>
            
       </Form> 
      </div>
    </div>
  :
  <>
  {isAdmin === true ? <Redirect to='/admin' /> : <Redirect to='/user'/>}
  </>
  }
   </> 
  );
}

export default App;
