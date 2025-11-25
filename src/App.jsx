import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import MainPage from './pages/MainPage'
import LibraryPage from './pages/LibraryPage'
import SupportPage from './pages/SupportPage'
import AboutPage from './pages/AboutPage'
import CommunityPage from "./pages/CommunityPage";
import NewsPage from './pages/NewsPage'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './assets/css/globals.css';
import './assets/css/App.css'

function App() {
  return (
    <>
      <Navbar/>
      <div className='page-content-container'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/library' element={<LibraryPage/>}/>
          <Route path='/games' element={<h1>games</h1>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/community' element={<CommunityPage/>}/>
          <Route path='/support' element={<SupportPage/>}/>
          <Route path='/news' element={<NewsPage/>}/>
        </Routes>
      </div>
	  <Footer/>
    </>
  )
}

export default App
