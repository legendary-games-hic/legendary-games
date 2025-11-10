import { Link } from "react-router-dom";

import '../assets/css/footer.css'

export default function Footer() {
  return (
    <nav className='navbar bg-navbar-and-footer d-flex justify-content-around'>
        <ul className='navbar-nav flex-row gap-5'>
			<li className='nav-item mx-auto'>
				<Link className='nav-link legendary-green-color navbar-link-hover-color' to='/library'>
					Support
				</Link>
			</li>
			<li className='nav-item mx-aut'>
				<Link className='nav-link legendary-green-color navbar-link-hover-color' to='/community'>
					About
				</Link>
			</li>
        </ul>
    </nav>
  )
}
