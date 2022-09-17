import React from "react"
import '../style.css'

export default function MobileMenu() {

  return <div id="mobileMenu">
        <br />
         <div className="mobileMenuItem"><a className="mobileMenuItem" href="one.html">Community</a></div>
		     <div className="mobileMenuItem"><a className="mobileMenuItem" href="two.html">Modules</a></div>
         <div className="mobileMenuItem"><a className="mobileMenuItem" href="two.html">Company</a></div>
         <div className="mobileMenuItem"><a className="mobileMenuItem" href="two.html">Pricing</a></div>
         <div className="mobileMenuItem">< a className="mobileMenuItem" href="two.html">Sign in</a></div>
         <div className="mobileMenuItem"><a className="mobileMenuItem" href="two.html">Schedule a Demo</a></div>
         <br />
    </div>
}