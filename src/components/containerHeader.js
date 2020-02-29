import React from 'react'
import '../css/containerHeader.css'

import Logo from '../images/image10.png'
import Albumcover from '../images/album-cover2.jpg'
import { Row } from 'reactstrap'
import { Col } from 'reactstrap'


const Containerheader = () => (
        <div id="containerHeader" className="container full screen" data-scroll-id="one" data-scroll-behavior="center" >
          <div className="innerHeader">
            <Row className="mainrow">
              <Col xs="5" className='albumpromo'>
                <img className='albumpromo' 
                  src={Albumcover} 
                  alt=''
               />
              </Col>
              <Col xs="5" className="albumlogo" > 
          
              <img className='albumlogo' src={Logo} alt='' /*mode='fit' */ />
                <p className="albumlogo"
             > Feed The People </p>
              </Col>
          </Row>
         </div>
        </div>
         
      )


export default Containerheader