import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Layout } from '../components'
import theme from '../constants/theme'

import '../styles/main.scss'

const TemplateWrapper = ({ children, data, ...props }) => {
  const { name } = data.site.siteMetadata

  return (
    <div>
      <Helmet defaultTitle={name} titleTemplate={`%s | ${name}`}>
        <meta name='twitter:site' content={name} />
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content={name} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <Layout>{children({ ...props })}</Layout>
      </ThemeProvider>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        name
        twitter
      }
    }
  }
`
