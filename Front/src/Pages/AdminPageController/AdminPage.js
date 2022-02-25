import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AdminNavbar from "../../Components/AdminNavbar";

import { withRouter } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <AdminNavbar />
    </>
  );
}

export default withRouter(AdminPage);
