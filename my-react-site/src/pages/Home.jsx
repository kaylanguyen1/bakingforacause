import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import FooterHome from '../components/footer-home.jsx'
import logo from '../assets/logo.png'

function Home() {

  return (
    <div className="home-background">
      <div className="home-header">
          <div className="home-page-container">
            <Link to="/about" className="home-tab inter-medium">about</Link>
            <Link to="/join" className="home-tab inter-medium">join</Link>
            <Link to="/gallery" className="home-tab inter-medium">gallery</Link>
          </div>
        </div>
      <div className="title-container">
        <div className="title instrument-serif-regular">baking for a cause</div>
      </div>
      <FooterHome />
    </div>

  )
}

export default Home