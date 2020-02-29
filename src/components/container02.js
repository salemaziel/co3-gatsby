import React from 'react'
import '../css/container02.css'

import TContentCards01 from './tcontentcardsrow1'
import TContentCards02 from './tcontentcardsrow2'

 

import TCardMobileNew from './tcardMobileNew'
import { Row, Col } from 'reactstrap';


const Container02 = () => (

        <div 
      id="container02" className="container default full screen" data-scroll-id="three" data-scroll-behavior="center">
        <div className="inner02">
        <Row className="songheaderRow" > 
          <Col>
              {/*<img className="songheader" src={Logo} alt='' />*/}
              <h2 className="songheader" >
                  Feed The People
              </h2>
              <p className="songheader">
                Tracks, Cover Art, and Lyrics
              </p>
          </Col>
           
</Row>
        
        <Row className="ftpsongs">
            
              <Col className="nomobile">
                <TContentCards01/>
                <TContentCards02/>
              </Col>
        </Row>

        <Row className="mobile-slider">
              <Col className="mobile-slider" >
                  <TCardMobileNew />
              </Col>    
        </Row>
      
        </div>
      </div>
)

export default Container02

