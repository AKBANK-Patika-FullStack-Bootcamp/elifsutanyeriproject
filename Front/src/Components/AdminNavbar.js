import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default function AdminNavbar(){
    return(
        <>
    <Nav className="adminnav">
    <Nav.Item>
      <NavLink to="admin/userInfo" activeClassName="active">
      Kullanıcı Bilgileri 
     </NavLink>
     </Nav.Item>
     <Nav.Item>
     <NavLink to="admin/aptInfo" activeClassName="active">
      Daire Bilgileri
     </NavLink>
     </Nav.Item>

     <Nav.Item>
     <NavLink to="/billsInfo" activeClassName="active">
      Fatura/Aidat Bilgileri
     </NavLink>
     </Nav.Item>
    </Nav>
     </>
    )
}   
