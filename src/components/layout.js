import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'


import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"/>
          <script src="https://unpkg.com/remarkable@1.6.2/dist/remarkable.min.js"></script>
        </Helmet>  
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            // textAlign: 'center',
            margin: `0 auto`,
            maxWidth: 1240,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          {/* <footer>
            © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
