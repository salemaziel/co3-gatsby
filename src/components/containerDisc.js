import React, { Component } from 'react'

import { Row, Col } from 'reactstrap'

import TCardMobile from './tcardMobile-old'


import '../css/containerDiscography.css'

import Tcontentdisc2row1 from './tcontentcardsdisc2row1'
import Tcontentdisc2row2 from './tcontentcardsdisc2row2'

import { FaAngleLeft } from 'react-icons/fa'

import Glplogo from '../images/song-art/global-lighting-album/co-oldlogo.png'
import Glpalbum from '../images/song-art/global-lighting-album/album-cover-glp.jpg'

//import LazyLoad from 'react-lazyload';


//import { Link } from 'react-router-dom'
import { Link } from 'gatsby'


//export default class Discography extends Component {
class ContainerDisc extends React.Component {
    render() {
        {/*const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };*/}
      return (
        <div 
      id="containerDisc" className="container default full screen" data-scroll-id="one" data-scroll-behavior="center"  >
        <div className="innerConDisc">
        {/*<Row className="songheaderRow2">*/}
        <Row className="backrow">
            
                <Link to="/" 
                        style={{
                            color: "white",
                            fontSize: "3em",}}
                        rel="preload"
                        >
                    <Col className="backcol">
                {/*<Link to="/" 
                      style={{
                            color: "white",
                            fontSize: "3em",
                            justifyContent: 'center',
                            }}>*/}
                            
                                <FaAngleLeft className="back01"/>
                                <FaAngleLeft className="back02"/>
                {/*</Link>*/}
                    </Col>
                </Link>
        </Row>

        <Row className="glplogo">
            <Col>
              <img className="glplogo" src={Glplogo} alt=''  />
            </Col>
            {/*<Col>
                <img className="glpalbum" src={Glpalbum} alt='' />
            </Col>*/}
        </Row>

        <Row className="glpsongs">
            <Col className="nomobile2">
                <Tcontentdisc2row1 />
            </Col>
            
            <Col className="mobile-slider2"  /*style={{display: 'none'}}*/>
                <TCardMobile />
            </Col>
            
            <Col className="nomobile2">
                <Tcontentdisc2row2 />
            </Col>
          
          
        </Row>
      {/*</Row>*/}
                          </div>
      </div>
      
      )
    }
}

export default ContainerDisc

