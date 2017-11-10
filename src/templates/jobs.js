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

export const pageQuery = graphql`
  query PostByCompany($companyId: String, $team: String) {
    allCompaniesYaml(filter: { id: { eq: $companyId } }) {
      edges {
        node {
          id
          name
          url
          size
        }
      }
    }
    allJobsYaml(
      filter: { companyId: { eq: $companyId }, team: { eq: $team } }
    ) {
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
