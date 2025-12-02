import { useLocation, Link } from "react-router-dom";


import '../assets/css/NotFoundPage.css'

export default function NotFoundPage() {
    const location = useLocation();

  return (
    <div className='not-found-page-container'>
        <i class="bi bi-emoji-frown legendary-green-color"></i>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for ("{location.pathname}") does not exist. If you believe this is an error, please contact
            Legendary Games staff through the <Link to='/support'>support page</Link>. Click <Link to='/'>here</Link> to return home.
        </p>
    </div>
  )
}
