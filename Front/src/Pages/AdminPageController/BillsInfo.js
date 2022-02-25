import GetBills from "../../Components/GetBills";
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import PostBills from "../../Components/PostBills";

export default function BillsInfo() {
  const [bills, setBills] = useState();

  const url = "http://localhost:5000/api/Admin/billsInfo";

  const getData = () => {
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => setBills(response.data));
  };

  return (
    <>
      <div className="accordContainer">
        <Accordion>
          <Accordion.Header onClick={getData}>
            Aidat Listesini Görüntüle
          </Accordion.Header>
          <Accordion.Body>
            <GetBills bills={bills} />
          </Accordion.Body>
        </Accordion>
        <Accordion>
          <Accordion.Header>Aidat/Fatura Ekle</Accordion.Header>
          <Accordion.Body className="accordForm">
            <PostBills />
          </Accordion.Body>
        </Accordion>
      </div>
    </>
  );
}
