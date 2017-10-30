import React from 'react'
import { Job } from '../containers'

export default ({ data, pathContext, ...props }) => {
  const job = data.allJobsYaml.edges[0].node
  const company = data.allCompaniesYaml.edges[0].node
  const meta = data.site.siteMetadata
  return <Job data={Object.assign({}, job, { company, meta })} />
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!, $companyId: String) {
    site {
      siteMetadata {
        siteUrl
        title
        description
        ogImage
        twitter
      }
    }
    allCompaniesYaml(filter: { id: { eq: $companyId } }, limit: 1) {
      edges {
        node {
          id
          name
          logo
          url
          size
        }
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
            why
            looking
            other
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
