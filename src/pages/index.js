import React from 'react'
import { JobList } from '../components'

export default ({ data, ...props }) => {
  console.log(data)
  const jobs = data.allJobsYaml.edges.map(item => item.node)

  return <JobList data={jobs} />
}

export const query = graphql`
  query Jobs {
    allJobsYaml {
      edges {
        node {
          team
          teamSize
          date
          companyId
          title
          path
          description
          location {
            city
            country
          }
          salary {
            currency
            from
            to
          }
        }
      }
    }
  }
`
