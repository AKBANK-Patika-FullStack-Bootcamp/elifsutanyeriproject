import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
// import AuthService from '../AuthorizationService/auth-service.js'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
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
  );
}