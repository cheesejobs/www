import React from 'react'
import { Jobs } from 'Containers'

export default ({ data, ...props }) => {
  const jobs = data.allJobsYaml.edges.map(item => item.node)

  const companies = data.allCompaniesYaml.edges
    .map(item => item.node)
    .reduce((acc, props) => {
      acc[props.id] = props
      return acc
    }, {})

  return <Jobs jobs={jobs} companies={companies} />
}

export const query = graphql`
  query Jobs {
    allCompaniesYaml {
      edges {
        node {
          id
          name
          url
          size
        }
      }
    }
    allJobsYaml {
      edges {
        node {
          team
          teamSize
          date
          companyId
          title
          path
          specs {
            id
            description
          }
        }
      }
    }
  }
`
