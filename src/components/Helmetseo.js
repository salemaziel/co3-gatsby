import React from 'react'
import Helmet from 'react-helmet'        
        
const Helmetseo = () => (
        <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Chaotic Order Music: Feed The People - Available Now!</title>
            <meta name="description" content="Official Website for Chaotic Order, metal band from San Diego, CA" />
            <meta property="og:site_name" content="Chaotic Order Music" />
            <meta property="og:title" content="Chaotic Order Music" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="../images/album-cover2.jpg" />
            <meta property="og:description" content="Official Website for Metal Band Chaotic Order" />
            <meta property="og:url" content="https://chaoticordermusic.com" />
            <meta property="twitter:card" content="summary_large_image" />
          </Helmet>
)

export default Helmetseo