import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState } from "react";

export default function PostUser() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [username, setUsername] = useState();
  const [TC, setTC] = useState();
  const [car, setCar] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    postUser();
  }

  const postUser = () => {
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:5000/api/Admin/addUser", {
        headers: {
          Authorization: `bearer ${token}`,
        },
        name,
        surname,
        username,
        phone,
        email,
        TC,
        car,
      })
      .then((response) => console.log(response));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Adı
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              placeholder="Adı"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Soyadı
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              placeholder="Soyadı"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Kullanıcı Adı
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            TC Kimlik Numarası
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              placeholder=""
              value={TC}
              onChange={(e) => setTC(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            E-mail
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Telefon Numarası
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              placeholder="Telefon Numarası"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Araç Plakası
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              placeholder="Plaka"
              value={car}
              onChange={(e) => setCar(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Gönder</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}
