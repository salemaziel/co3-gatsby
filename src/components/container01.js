import React from 'react'
import '../css/container01.css'

import { Row, Col } from 'reactstrap'




const Container01 = () => (
        <div id="container01" data-scroll-id="two" data-scroll-behavior="center" className="container default full screen">
        <div className="inner01">
          <div className="afterSpacer01">
          
          <Row style={{
            alignContent: 'right',
            justifyContent: 'right',
            padding: '0',
              }}>
          
                <Col sm="4">
                    <p className="style01"
                    style={{
                        fontSize: "1em", 
                        textAlign: "right", 
                        padding: "0"}}
                      >Artwork provided by <br /> 
                        <a href="https://www.murraykruger.com" 
                            style={{
                                textDecoration: 'underline',
                                color: 'white',
                       }}>MURRAY KRUGER </a> </p></Col>
                      </Row>
                      </div>
        </div>
      </div>
      )


export default Container01



