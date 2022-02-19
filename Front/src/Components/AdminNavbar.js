import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AdminNavbar(){
    const menu = [
        {
            path: '/admin/userInfo', // the url
            name: 'userInfo', // name that appear in Sidebar
        },
        {
            path: '/admin/billsInfo',
            name: 'billsInfo',
        },
        ];

    return(
        <>
    {/* <Nav className="adminnav">
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
    </Nav> */}


    <h2>React Nested Routes</h2>
        <ul>
            {menu.map((menuItem) => (
            <li key={menuItem.name}>
                <Link to={menuItem.path}>{menuItem.name}</Link>
            </li>
            ))}
        </ul>
     </>
    )
}   
