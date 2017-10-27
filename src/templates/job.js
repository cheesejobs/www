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
        name
        twitter
        description
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
          location {
            city
            country
            street
            postalCode
          }
          path
          recruitingSteps {
            title
            description
            time
          }
          requirements {
            responsabilities
            requeriments
            nices
          }
          salary {
            currency
            from
            to
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
