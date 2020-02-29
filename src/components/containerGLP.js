import React from 'react'
import '../css/containerGLP.css'
import Glpalbum from '../images/song-art/global-lighting-album/album-cover-glp.jpg'

//import { Link } from 'react-router-dom'

import { Link } from 'gatsby'

import { Row, Col } from 'reactstrap'
import GLPbuttons from '../components/glpbuttons'


const ContainerGLP = () => (
        <div id="ContainerGLP" data-scroll-id="five" data-scroll-behavior="center"  className="container columns full screen">
        <div id="innerGLP" >
          
          <div className="afterSpacerGLP" >
            <Row className="firstalbumHeader"
            style={{
               
            }}>
              <Col className="firstalbumtitle">
                  <h1 className="style1">
                      Chaotic Order 2016 Album:
                      <br />
                      <span className="glpspan">Global Lighting Project</span>
                  </h1>
            
                 
                  <p className="proceeds" >
                The Global Lighting Project is a 501(c)3 nonprofit working toward bringing sustainable, renewable light and energy sources to our brothers and sisters in communities around the world. All proceeds of Chaotic Order go toward helping fund this cause.
           </p>
           
           
           <p className="proceeds">
              Chaotic Order's first album, released in 2016, was named after the seedling nonprofit. 
            </p>
            
            
            <GLPbuttons />
            
                </Col>
            <Col>
            <Link rel="preload" to="/Discography01" style={{
                            color: "white",
                            fontSize: "2em",
                            fontVariant: "small-caps",
                            justifyContent: "center",
                            marginTop: "50px",
                          
                            }}><img
                                className="firstalbum"
                                src={Glpalbum}
                                /*mode="fit"*/></img> 
              </Link>
          </Col>
          </Row>
          <Row className="firstalbumHeader" /*style={{display: 'flex', width: '350px', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}/*className="oldAlbumText"*/ >
            <Col className="firstalbumtitle">
            <div className="proceeds">
            
            </div>
            </Col>
            </Row>
          </div>
        </div>
      </div>
      )

export default ContainerGLP