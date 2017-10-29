import React from 'react'
import { Job } from '../containers'

export default ({ data, pathContext, ...props }) => {
  const job = data.allJobsYaml.edges[0].node
  return <Job data={job} />
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        siteUrl
        title
        description
        ogImage
        twitter
      }
    }
    allJobsYaml(filter: { path: { eq: $path } }, limit: 1) {
      edges {
        node {
          benefits {
            description
            icon
            id
          }
          date
          description {
            other
            what
            why
          }
          equipment {
            computer
            monitors
            operating_system {
              apple
              windows
              linux
            }
          }
          title
          path
          recruitingSteps {
            title
            description
            time
          }
          requirements {
            name
            content
          }
          specs {
            description
            id
          }
          teamDistribution {
            id
            value
          }
          technologies
          workMethodology {
            id
            value
          }
          workProfile {
            newFeatures
            maintenance
            clientSupport
            documentWriting
            meetings
          }
        }
      }
    }
  }
`
