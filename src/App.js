import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import  { Routes } from 'react-router-dom'
import {
  BrowserRouter as Router,
  
  Route
  
} from 'react-router-dom'

const App = () => {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mide has been enabled', 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar title="MySite2" mode={mode} toggleMode={toggleMode} aboutText="ItsAbout" />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path='/about'element={<About/>}>
              
            </Route>
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text Below" mode={mode} />}>
              
            </Route>

          </Routes>
        </div>
      </Router>
    </>

  )
}

export default App



