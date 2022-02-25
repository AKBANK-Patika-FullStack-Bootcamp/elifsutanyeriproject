import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState } from "react";

export default function PostBills() {
  const [elec, setElec] = useState();
  const [water, setWater] = useState();
  const [gas, setGas] = useState();
  const [due, setDue] = useState();
  const [ispaid, setIspaid] = useState();
  const [month, setMonth] = useState();
  const [userid, setUserid] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    postBill();
  }

  const postBill = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .post(
        "http://localhost:5000/api/Admin/addBills",
        { elec, gas, water, due, ispaid, month, userid },

        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((response) => notification(response.status));
  };

  const notification = (response) => {
    if (response === 200) {
      alert("Başarılı");
    } else alert("Hata");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Elektrik
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              value={elec}
              onChange={(e) => setElec(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Su
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              value={water}
              onChange={(e) => setWater(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Gaz
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              value={gas}
              onChange={(e) => setGas(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Aidat
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              value={due}
              onChange={(e) => setDue(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Ay
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Ödendi
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              placeholder="Telefon Numarası"
              value={ispaid}
              onChange={(e) => setIspaid(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Kullanıcı Id
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
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
