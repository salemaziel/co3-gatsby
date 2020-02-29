import React from 'react'
import '../css/containermemory.css'

import { Row, Col, } from 'reactstrap'
import Candles from '../images/candles-1.png'
import Sister from '../images/sister-sm.png'
import Dad from '../images/dad-sm.png'


class Containermemory extends React.Component {
    render() {
      return (
        <div id="containermemory" className="container columns full screen" data-scroll-id="memory" data-scroll-behavior="center">
        {/*<div className="darkbackground" />*/}
        <div className="inner">

        <Row>
            <Col xs="4">
              <img src={Candles} />
                
                <div className="memorycontainer">
                        {/*<h2>In Loving Memory</h2>*/}
                        <img className="lovingmem" src={Sister} />
                        <img className="lovingmem" src={Dad} />

                    </div>
                </Col>
                <Col xs="1">
                  
                  
                </Col>
               
            </Row>
          

         
        </div>
      </div>
      )
    }
}

export default Containermemory