import React from 'react'

export default ({data, pathContext, ...props}) => {
  // TODO: Move this inside GraphQL query
  const jobs = data.allJobsYaml.edges.map(item => item.node)
  const job = jobs.filter(({path}) => path === pathContext.path)[0]
  return <p>{job.title}</p>
}

export const pageQuery = graphql`
  query BlogPostByPath {
    site {
      siteMetadata {
        name
        twitter
        description
      }
    }
    allJobsYaml {
      edges {
        node {
          title,
          path
        }
      }
    }
  }
`
