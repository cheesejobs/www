import React from 'react'

export default ({data, ...props}) => {
  const jobs = data.allJobsYaml.edges.map(item => item.node)

  return (
    <div>
      <p>List of all jobs published</p>
      <ul>
        {jobs.map(({path, title}) =>
          <li key={title}>
            <a href={`${path}`}>{title}</a>
          </li>)}
      </ul>
    </div>
  )
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
