import { Link } from "react-router-dom";

import '../assets/css/navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar bg-navbar-and-footer d-flex justify-content-around'>
        <Link className='navbar-brand legendary-green-color navbar-link-hover-color' to='/'>
            Legendary Games
        </Link>

        <ul className='navbar-nav flex-row gap-5'>
			<li className='nav-item mx-auto'>
				<Link className='nav-link legendary-green-color navbar-link-hover-color' to='/library'>
					Library
				</Link>
			</li>
			<li className='nav-item mx-aut'>
				<Link className='nav-link legendary-green-color navbar-link-hover-color' to='/community'>
					Community
				</Link>
			</li>
			<li className='nav-item mx-auto'>
				<Link className='nav-link legendary-green-color navbar-link-hover-color' to='/news'>
					News
				</Link>
			</li>
			<li className='nav-item mx-auto'>
				<Link className='nav-link legendary-green-color navbar-link-hover-color' to='/profile'>
					<i className='bi bi-cart'></i>
				</Link>
			</li>
        </ul>
    </nav>
  )
}
