import React from "react"
import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'
import '../style.css'



export default function Navbar() {
  
  const handleClick = event => {
    // refers to the image element
    

    var x = document.getElementById("mobileMenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
  };

  return <div id="navbar">
    <div id="navContainer">
      <img id="logo" src={logo} alt="logo" width="55" height="50" />
      <h1 id="title">AcceleratorApp</h1>
  	</div>
    {/*Desktop menu*/}
    <div id="navItems">
       <nav>
         <a class="navItems" href="one.html">Community</a>
		     <a class="navItems" href="two.html">Modules</a>
         <a class="navItems" href="two.html">Company</a>
         <a class="navItems" href="two.html">Pricing</a>
         <button class="ghostButton">Sign in</button>
         <button id="demoButtonNav">Schedule a Demo</button>
      </nav>	
      {/*Hamburger menu*/}
    <img id="hamburgerIcon" src={hamburger} onClick={handleClick} alt="charts" width="30" height="30" />
    </div>

  </div>
}