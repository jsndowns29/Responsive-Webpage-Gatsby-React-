import React from "react"
import CommunityTile from "../components/communityTile.js"
import {data} from "../data/communityData.js"
import '../style.css'
import { Container, Col } from 'react-grid';


export default function Community() {

  return <div id="community">

    <div id="communityTextDiv">
        <p id="communityText1">Community</p>
        <p id="communityText2">Lorem ipsum dolor sit amet</p>
        <p id="communityText3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/*<div class="row">
        data.map((data)=>{
            return <div class="column">
                <CommunitySection title={data.title} p={data.p} p2={data.p2} f1={data.f1} f2={data.f2} f3={data.f3} />
            </div>  
        })
        </div>*/}
    <div style={{marginTop: "40px"}}>
        <Container fluid  id="communityGrid" >
            <div className="center">
                {data.map((data)=>{
                    return <Col md="auto">
                        <CommunityTile title={data.title} p={data.p} p2={data.p2} f1={data.f1} f2={data.f2} f3={data.f3} />
                    </Col>  
                })}
                {/*invisible tile to even the grid*/}
                <Col md="auto">
                       <div id="invisible"></div>
                </Col> 
            </div>
        </Container>
        </div>
    </div>
    
    {/*<div className="grid_items">
        
        {data.map((data)=>{
            return <div className="grid_item">  <CommunitySection title={data.title} p={data.p} p2={data.p2} f1={data.f1} f2={data.f2} f3={data.f3} /></div>
        })}
    </div>*/}

    
    
  </div>
}