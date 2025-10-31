import './assets/css/App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<h1>main</h1>}/>
        <Route path='/games' element={<h1>games</h1>}/>
        <Route path='/about' element={<h1>about</h1>}/>
      </Routes>
    </>
  )
}

export default App
