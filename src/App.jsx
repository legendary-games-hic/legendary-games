import './assets/css/App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import MainPage from './pages/MainPage'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/games' element={<h1>games</h1>}/>
        <Route path='/about' element={<h1>about</h1>}/>
      </Routes>
    </>
  )
}

export default App
