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
            frontend
            backend
            devops
            sales
            design
          }
          technologies {
            rank
            name
          }
          workMethodology {
            agile_management {
              active
              description
            }
            build_server {
              active
              description
            }
            code_reviews {
              active
              description
            }
            commit_first_day {
              active
              description
            }
            tools_freedom {
              active
              description
            }
            integration_tests {
              active
              description
            }
            pair_programming {
              active
              description
            }
            issue_tracking {
              active
              description
            }
            one_command_build {
              active
              description
            }
            statis_code_analyzer {
              active
              description
            }
            unit_tests {
              active
              description
            }
            testers {
              active
              description
            }
            up_and_running_2h {
              active
              description
            }
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
