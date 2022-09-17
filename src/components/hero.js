import React from "react"
import Navbar from "../components/Navbar.js"
import MobileMenu from "../components/mobileMenu.js"
import chart from '../assets/allCharts.svg'

import '../style.css' 

export default function Hero() {

  return <div >
    <div id="hero">
      <Navbar />
      <MobileMenu />
      
      <div id="heroText">
        <p id="headline1">Join in and connect</p>
        <p id="headline2">To faster your <br/> innovation potential</p>
        <p id="headline3">AcceleratorApp Innovation Community — Tools and community to <br/> facilitate innovation between all members of our community</p>
        <button id="demoButton">Schedule a Demo</button>
        
        <div id="charts">
          <img id="chartsImage" src={chart} alt="charts" width="80%" />
        </div>
      </div>
      
    </div>
    
  </div>
}