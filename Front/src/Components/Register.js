import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom'


export default function Register() {

    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return(
    <>
    <div className="card card-container">
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                <Accordion.Header>Yönergeler</Accordion.Header>
                    <Accordion.Body>
                <p>1. Kullanıcı adınız yönetici tarafından otomatik olarak oluşturulmuştur.<br/>
                2. Kullanıcı adınız küçük harflerle ve birleşik şekilde adınız, soyadınız ve daire numaranızdan oluşmaktadır.<br/>
                Örnek kullanıcı adı: mehmetkaya12<br/>
                3. En az 5 karakterden oluşan bir şifre belirledikten sonra, üye ol butonuna basarak üye olunuz.<br/>
                4. Kullanıcı bilgileri butona basıldıktan sonra oluşturulacaktır, daha sonra <Link to="/">anasayfadan</Link> giriş yapabilirsiniz.
                </p>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group controlId="validationCustomUsername">
            <Form.Label>Kullanıcı Adı</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Lütfen kullanıcı adı giriniz
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="validationCustom03">
            <Form.Label>Şifre</Form.Label>
            <Form.Control type="password" placeholder="Şifre" required />
            <Form.Control.Feedback type="invalid">
              Lütfen şifre giriniz.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Üye Ol</Button>
      </Form>
      </div>
    </>
    )
}

