'use strict'

const path = require('path')

const fetchCompaniesLogos = require('./server/fetch-companies-logos')
const jobsTemplate = path.resolve('./src/templates/jobs.js')
const jobTemplate = path.resolve('./src/templates/job.js')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const graphqlPromise = () =>
    new Promise((resolve, reject) => {
      resolve(
        graphql(`
          {
            allCompaniesYaml {
              edges {
                node {
                  id
                  url
                }
              }
            }
            allJobsYaml {
              edges {
                node {
                  path
                }
              }
            }
          }
        `).then(result => {
          if (!result.errors) return result
          console.log(result.errors)
          return reject(result.errors)
        })
      )
    })

  const result = await graphqlPromise()
  const jobs = result.data.allJobsYaml.edges.map(item => item.node)
  const companiesUrls = result.data.allCompaniesYaml.edges.map(
    item => item.node.url
  )

  const companiesIds = result.data.allCompaniesYaml.edges.map(
    item => item.node.id
  )

  // update all companies logos
  await fetchCompaniesLogos(companiesUrls)

  // index
  createPage({
    path: '/',
    component: jobsTemplate,
    context: {
      path: '/'
    }
  })

  // individual offers
  jobs.forEach(job =>
    createPage({
      path: job.path,
      component: jobTemplate,
      context: {
        path: job.path,
        companyId: job.companyId
      }
    })
  )

  companiesIds.forEach(companyId => {
    const companyPath = `/${companyId}/`
    createPage({
      path: companyPath,
      component: jobsTemplate,
      context: {
        path: companyPath,
        companyId
      }
    })
  })
}

exports.modifyWebpackConfig = ({ config, stage }) =>
  config.merge({
    resolve: {
      alias: {
        Components: path.join(__dirname, '/src/components'),
        Containers: path.join(__dirname, '/src/containers'),
        Helpers: path.join(__dirname, '/src/helpers')
      }
    }
  })
