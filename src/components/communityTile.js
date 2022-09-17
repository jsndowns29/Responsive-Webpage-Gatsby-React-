import React from "react"
import check from "../assets/check.svg"
import '../style.css'

export default function CommunityTile({title, p, p2, f1, f2, f3}) {
  return <div className="communitySection">
    <div className="CSText">
        <p className="CSTextTitle">{title}</p>
        <p className="CSTextP">{p}</p>
        <p className="CSTextP">{p2}</p>
        <hr id="hr"/>
        <p id="featuresHeading">Popular Features</p>
        <div className="sameLine check"><img src={check} alt="check mark" width="19" height="19" /><p className="features">{f1}</p></div>
        <div className="sameLine check"><img src={check} alt="check mark" width="19" height="19" /><p className="features">{f2}</p></div>
        <div className="sameLine check"><img src={check} alt="check mark" width="19" height="19" /><p className="features">{f3}</p></div>
        <button id="GSButton">Get Started</button>
    </div>
  </div>
}