'use strict'

const path = require('path')

const fetchCompaniesLogos = require('./server/fetch-companies-logos')
const jobTemplate = path.resolve('./src/templates/job.js')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

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
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
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
  const markdowns = result.data.allMarkdownRemark.edges.map(item => item.node)
  const companiesUrls = result.data.allCompaniesYaml.edges.map(
    item => item.node.url
  )

  await fetchCompaniesLogos(companiesUrls)

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

  markdowns.map(({ fields }) => {
    createPage({
      path: fields.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: fields.slug
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
