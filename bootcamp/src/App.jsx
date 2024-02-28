import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import ErrorComponente from './components/ErrorComponente/ErrorComponente'
import Login from './components/Login/Login'
import AudioButton from './components/ComponenteSonido/componenteSonido';




function App() {
  const soundSource = "./sound/simpsonsSound.mp3"; 
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ErrorComponente" element={<ErrorComponente />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
        <div>
          <AudioButton soundSrc={soundSource} />
        </div>
      </>
    )
}

export default App
