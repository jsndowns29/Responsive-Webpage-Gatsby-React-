import React from "react"
import { Container, Col } from 'react-grid';
import FeaturesTile from "../components/featuresTile.js"
import {featuresData} from "../data/featuresData.js"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../style.css' 

export default function Features() {


  return <div id="features">
   <div id="featuresText">
        <p id="featuresTitle">Features integrated</p>
        <p id="featuresSubheading">Know all our features that we have for accelerate your business.</p>
   </div>
   <Container fluid  id="featuresGrid" >
            <div className="center">
                {featuresData.map((data)=>{
                    return <Col md="auto">
                        <FeaturesTile url={data.url} title={data.title} p={data.p} />
                    </Col>  
                })}
                {/*invisible tile to even the grid*/}
                <Col md="auto">
                       <div id="invisibleFeature">
                            <button id="featuresButton">Discover its functions &#8594;</button>
                       </div>
                </Col> 
            </div>
    </Container>

    <div id="mobileFeatures">
        <Carousel showStatus={false} centerMode={true} centerSlidePercentage={100}>
            {featuresData.map((data)=>{
                    return <div className="mobileFeatureTile">
                        <FeaturesTile url={data.url} title={data.title} p={data.p} />    
                    </div>  
            })}
        </Carousel>
        <div className="centerButton"><button id="featuresButtonMobile">Discover its functions &#8594;</button></div>
                            
    </div>
    
  </div>
}