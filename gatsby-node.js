const Promise = require('bluebird')
const path = require('path')
const jobTemplate = path.resolve('./src/templates/job.js')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allJobsYaml {
              edges {
                node {
                  path
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const jobs = result.data.allJobsYaml.edges.map(item => item.node)

        jobs.forEach(job => {
          createPage({
            path: job.path,
            component: jobTemplate,
            context: {
              path: job.path
            }
          })
        })
      })
    )
  })
}
