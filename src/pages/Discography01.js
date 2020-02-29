import React, { Component } from 'react'
import ContainerDisc01 from '../components/containerDisc01'
import Embed from 'react-song-embed'
import Helmet from 'react-helmet'

const Discography01 = () => (
          <React.Fragment>
            <Helmet htmlAttributes={{ lang: 'en' }}>
                <title>Chaotic Order Music: Discography</title>
                <meta name="description" content="Discography of Past Albums by Chaotic Order, metal band from San Diego, CA" />
                <meta property="og:site_name" content="Chaotic Order Music" />
                <meta property="og:title" content="Chaotic Order Music" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="" />
                <meta property="og:description" content="Official Website for Metal Band Chaotic Order" />
                <meta property="og:url" content="https://chaoticordermusic.com/discography" />
                <meta property="twitter:card" content="summary_large_image" />
              </Helmet>
            {/*<div className="main">*/}
                <div id="wrapperDisc01">
                  <Embed 
                      url="https://album.link/VdPNv59kZRQM8" 
                      height={52} 
                      dark 
                      style={{
                          display: 'block', 
                        position: 'sticky',
                        zIndex: '20',
                    }} />
                    <div id="mainDisc01">
                        <div className="inner">
                        <section id="home-section" style={{
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      height: '100%'
                                                      
                        }}>
                          <ContainerDisc01 />
    
                        </section>
    
                        </div>
                        
                      </div>
                  </div>
                    {/*</div>*/}
          </React.Fragment>
          
        )
export default Discography01
