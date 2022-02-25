import { useState } from "react";
import axios from "axios";
import GetUser from "../../Components/GetUser";
import PostUser from "../../Components/PostUser";
import { Accordion } from "react-bootstrap";

export default function UserInfo() {
  const [users, setUsers] = useState("");

  const url = "http://localhost:5000/api/Admin/userInfo";

  const getData = () => {
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => setUsers(response.data));
  };
  return (
    <>
      <Accordion>
        <Accordion.Header onClick={getData}>
          Kullanıcı Listesini Görüntüle
        </Accordion.Header>
        <Accordion.Body>
          <GetUser users={users} />
        </Accordion.Body>
      </Accordion>
      <Accordion>
        <Accordion.Header>Kullanıcı Ekle</Accordion.Header>
        <Accordion.Body>
          <PostUser />
        </Accordion.Body>
      </Accordion>
    </>
  );
}
