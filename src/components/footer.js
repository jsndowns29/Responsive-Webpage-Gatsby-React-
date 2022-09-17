import React, {useState} from "react"
import '../style.css'
import linkedin from "../assets/linkedin.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import globe from "../assets/globe.svg"
import hiring from "../assets/hiring.svg"

export default function Footer() {
    const[value, setValue] = useState("");


  const handleChange = event => {
    setValue(event.target.value); 
  };

  const handleSubmit = event => {
    //do stuff 
  };

  return <div>
      
        <div class="footer">
        <div className="footerHeading">
            <p id="fh1">Join our growing community</p>
            <p id="fh2">Sign up for news and updates about AcceleratorApp</p>
            <form onSubmit={handleSubmit}>
                <label>
                <input placeholder="Your email" type="text" value={value} onChange={handleChange} />
                </label>
                <input id="submit" type="submit" value="&#8594;" />
            </form>
        </div>
        <div class="contain">
        <div class="col">
        <h1>Community</h1>
            <ul>
            <br/><hr className="line"/>
            <li>Incubator/Accelerator</li>
            <li>Corprations</li>
            <li>Startups</li>
            <li>Investor</li>
            <li>Open challenges</li>
            </ul>
        </div>
        <div class="col">
            <h1>Modules</h1>
            <br/><hr className="line"/>
            <ul>
            <li>Coaching Module</li>
            <li>Data Module</li>
            <li>Ecosystem Module</li>
            <li>LMS Module</li>
            <li>Events</li>
            <li>Application Processing</li>
            
            </ul>
        </div>
        <div class="col">
            <h1>Company</h1>
            <br/><hr className="line"/>
            <ul>
            <li>About us</li>
            <li><div className="sameLine">Careers <img src={hiring} style={{marginLeft: "10px"}} alt="hiring" width="70" height="30" /></div></li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Contact Us</li>
            </ul>
        </div>
        <div class="col">
            <h1>Documentation</h1>
            <br/><hr className="line"/>
            <ul>
            <li>Documentation</li>
            <li>Release Log</li>
            <li>FAQ</li>
            <li>Legal</li>
            </ul>
        </div>
        <div class="col">
            <h1>Follow</h1>
            <br/><hr className="line"/>
            <ul id="desktopSocialmedia">
            <li><img src={linkedin} alt="Linkedin icon" width="30" height="30" /></li>
            <li><img src={facebook} alt="Facebook icon" width="30" height="30" /></li>
            <li><img src={instagram} alt="Instagram icon" width="30" height="30" /></li>
            <li><img src={twitter} alt="Twitter icon" width="30" height="30" /></li>
            </ul>
            <div id="mobileSocialmedia">
            <img src={linkedin} className="marginRightSmall" alt="Linkedin icon" width="30" height="30" />
            <img src={facebook} className="marginRightSmall" alt="Facebook icon" width="30" height="30" />
            <img src={instagram} className="marginRightSmall" alt="Instagram icon" width="30" height="30" />
            <img src={twitter} className="marginRightSmall" alt="Twitter icon" width="30" height="30" />
            </div>
        </div>
        
        <div id="desktopFooter"> 

            <div id="desktopBottomLinks">
                <p className="marginLeft">privacy</p>
                <p className="marginLeft">Cookies</p>
                <p className="marginLeft">Terms of Use</p>
                <p className="marginLeft">DPA</p>
                <p className="marginLeft">Subproccessing</p>
            </div>
            <div id="desktopBottomLinksRight">
                <p className="marginRight">Copyright © 2022 AcceleratorApp All Rights Reserved</p>
                <div className="vl marginRight"></div>
                <img id="globe" src={globe} alt="Language icon" width="25" height="25" />
                <p className="marginRight">English</p>
            </div>
            
        </div>

        
        <div class="clearfix"></div>
        </div>
        </div>
        <div id="mobileFooter"> 
            
            <div className="mobileBottomLinks">
                <p className="mobileBottomLinks">privacy</p>
                <p className="marginLeft mobileBottomLinks">Cookies</p>
            </div>
                <br/>
                <hr id="bottomHr"/>
                <br/>
            <div className="mobileBottomLinks">
                <p>Terms of Use</p>
                <p className="marginLeft">DPA</p>
                <p className="marginLeft">Subproccessing</p>
            </div>
               
        </div>
        <div id="mobileBottomLinksRight">
            <p style={{paddingLeft: "20px"}} className="marginRight marginTop marginBottom">Copyright © 2022 AcceleratorApp All Rights Reserved</p>
            <div className="vlMobile marginRight marginTop marginBottom"></div>
            <img id="globeMobile" className="marginTop marginBottom" src={globe} alt="Language icon" width="35" height="35" />
        </div>
  </div>
}