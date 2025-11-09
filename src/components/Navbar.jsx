import { Link } from "react-router-dom";

import '../assets/css/navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar bg-navbar-and-footer'>
        <Link className='navbar-brand legendary-green-color' to='/'>
            Legendary Games
        </Link>
        <Link className='nav-item legendary-green-color' to='/'>
            Library
        </Link>
        <Link className='nav-item legendary-green-color' to='/'>
            Community
        </Link>
        <Link className='nav-item legendary-green-color' to='/'>
            News
        </Link>
    </nav>
  )
}
