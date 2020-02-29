/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Embed from 'react-song-embed'
import Helmetseo from './Helmetseo'
import ContainerContact from './containerContact'

//import Header from "./header"
import "../css/main2.css"

const Layout = ({ children }) => {
  {/*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/}

  return (
    <>
    <Helmetseo />
    <div className="main">
            <div id="wrapper">
              <Embed 
                  rel="preload"
                  url="https://album.link/VdPNv59kZRQM8" 
                  height={52} 
                  dark 
                  style={{
                      display: 'fixed', 
                    position: 'relative',
                    zIndex: '20'
                }} />
                {/*<div id="main">
                    <div className="inner">*/}
     {/* <Header siteTitle={data.site.siteMetadata.title} />*/}
      {/*<div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >*/}
        <main>
              <div className="inner">
                  {children}
              </div>
        </main>

        <footer>
          <ContainerContact />
        {/*}  © {new Date().getFullYear()}, Built with
          {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        </footer>
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
