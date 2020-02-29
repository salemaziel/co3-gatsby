import React, { Component } from 'react'

import { Row, Col } from 'reactstrap'

import TcardMobile2 from './tcardMobile2'


import '../css/containerDiscography01.css'

import Tcontentdisc2row1 from './tcontentcardsdisc2row1'
import Tcontentdisc2row2 from './tcontentcardsdisc2row2'

import { FaAngleLeft } from 'react-icons/fa'

import Glplogo from '../images/song-art/global-lighting-album/co-oldlogo.png'
import Glpalbum from '../images/song-art/global-lighting-album/album-cover-glp.jpg'

import LazyLoad from 'react-lazyload';


//import { Link } from 'react-router-dom'
import { Link } from 'gatsby'

//export default class Discography extends Component {
class ContainerDisc01 extends React.Component {
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
      id="containerDisc01" className="container default full screen" data-scroll-id="one" data-scroll-behavior="center"  >
        <div className="innerConDisc01">
        {/*<Row className="songheaderRow2">*/}
        <Row className="backrow01">
            
                <Link to="/" 
                      rel="preload"
                      style={{
                            color: "white",
                            fontSize: "3em",}}>
                    <Col className="backcol01">
                {/*<Link to="/" 
                      style={{
                            color: "white",
                            fontSize: "3em",
                            justifyContent: 'center',
                            }}>*/}
                            
                                <FaAngleLeft className="back0101"/>
                                <FaAngleLeft className="back0201"/>
                {/*</Link>*/}
                    </Col>
                </Link>
        </Row>

        <Row className="glplogo01">
            <Col>
              <img className="glplogo01" src={Glplogo} alt=''  />
            </Col>
            {/*<Col>
                <img className="glpalbum01" src={Glpalbum} alt='' />
            </Col>*/}
        </Row>

        <Row className="glpsongs01">
        
            <Col className="nomobile201">
                <Tcontentdisc2row1 />
            </Col>
            
            <Col className="nomobile201">
                <Tcontentdisc2row2 />
            </Col>

            <Col className="mobile-slider201"  /*style={{display: 'none'}}*/>
                <TcardMobile2 />
            </Col>
          
        </Row>
      {/*</Row>*/}
                          </div>
      </div>
      
      )
    }
}

export default ContainerDisc01



