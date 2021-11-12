import React from 'react'
import './App.css'
import { BrowserRouter as Link, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="hero">
          <h2>DESIGN YOUR HOUSE</h2>
          <p>
            Subscribe Easy Youtube Channel to watch more videos,<br></br>
            press t he bell icon to get latest updates.
          </p>
          <button>MORE VIDEOS</button>
        </div>
      </div>
    </div>
  )
}

export default App
