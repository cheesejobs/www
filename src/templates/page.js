import React from 'react'
import { Page } from 'Components'

export default ({ data }) => {
  const page = data.markdownRemark
  return <Page meta={page.frontmatter} body={page.html} />
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
