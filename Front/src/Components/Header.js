import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>   

        </>
    )
}



