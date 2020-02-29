import React, { Component } from 'react'


import '../css/main2.css'

import Containerheader from '../components/containerHeader'
import Container01 from '../components/container01'
import Container02 from '../components/container02'
import ContainerGLP from '../components/containerGLP'
import ContainerBio from '../components/containerBio'
import Containercontact from '../components/containerContact'
//import Containermemory from './components/containerMemory'
//import ContainerFooter from './components/containerFooter'

import Embed from 'react-song-embed'

import Helmet from 'react-helmet'
import '../css/textstyles.css'


//export default class Home extends Component {

//  render() {
//    return (
  const Home = () => (
      
      <React.Fragment>
        <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Chaotic Order Music: Feed The People - Available Now!</title>
            <meta name="description" content="Official Website for Chaotic Order, metal band from San Diego, CA" />
            <meta property="og:site_name" content="Chaotic Order Music" />
            <meta property="og:title" content="Chaotic Order Music" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="./images/album-cover2.jpg" />
            <meta property="og:description" content="Official Website for Metal Band Chaotic Order" />
            <meta property="og:url" content="https://chaoticordermusic.com" />
            <meta property="twitter:card" content="summary_large_image" />
          </Helmet>
        <div className="main" style={{
                                
        }}>
            <div id="wrapper">
              <Embed 
                  url="https://album.link/VdPNv59kZRQM8" 
                  height={52} 
                  dark 
                  style={{
                      display: 'block', 
                    position: 'sticky',
                    zIndex: '20'
                }} />
                <div id="main">
              <div className="inner">
                    <section id="home-section" style={{
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  /*maxWidth: "100%"*/
                                                  
                    }}>
                      <Containerheader />

                      <Container01 />
                    
                      <Container02 />

                      <ContainerBio />

                      <ContainerGLP />
                  
                     {/*<Containermemory />*/}
                     <Containercontact />
                      
                      

                    
                   {/*<ContainerFooter/>*/}
                    </section>

                    </div>
                    
                  </div>
              </div>
                    </div>
                 </React.Fragment>
      
    )
export default Home


