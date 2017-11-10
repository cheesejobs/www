'use strict'

const path = require('path')

const fetchCompaniesLogos = require('./server/fetch-companies-logos')
const jobsTemplate = path.resolve('./src/templates/jobs.js')
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
                  id
                  url
                }
              }
            }
            allJobsYaml {
              edges {
                node {
                  path
                  team
                  companyId
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

  const teams = jobs.reduce((acc, job) => {
    if (!acc.includes(job.team)) acc.push(job.team)
    return acc
  }, [])

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
  jobs.forEach(job => {
    createPage({
      path: job.path,
      component: jobTemplate,
      context: {
        path: job.path,
        companyId: job.companyId
      }
    })
  })

  // offers by company
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

  // offers by team
  teams.forEach(team => {
    const teamPath = `/${team}/`
    createPage({
      path: teamPath,
      component: jobsTemplate,
      context: {
        path: teamPath,
        team
      }
    })
  })

  // markdown pages
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
