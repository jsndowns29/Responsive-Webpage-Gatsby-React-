import React from "react"
import '../style.css'


export default function FeaturesTile({url, title, p}) {


  return <div className="featuresTile">
    <div className="CSText">
        <img className="featuresIcon" src={url.default} alt="" width="44" height="44" />
        <p className="featuresTileTitle">{title}</p>
        <p className="CSTextP">{p}</p>
    </div>
  </div>
}