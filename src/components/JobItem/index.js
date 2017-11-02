/* global URL */

import React from 'react'
import PropTypes from 'prop-types'

import { dateHelper } from 'Helpers'

import {
  About,
  Location,
  JobItemNode,
  Logo,
  Header,
  New,
  Position,
  PublishedDate
} from './styled'

const FALLBACK_LOGO = 'fallback.gif'
const getLogoUrl = company => `${new URL(company.url).hostname}.png`
const isClientSide = window !== `undefined`
const getCompanyLogo = company =>
  `/img/logo/${isClientSide ? getLogoUrl(company) : FALLBACK_LOGO}`

const JobItem = props => {
  const { date, company, path, specs, title } = props
  const location = specs.find(item => item.id === 'location').description
  const { name, about } = company
  const isNew = dateHelper.inLast24Hours(date)

  return (
    <JobItemNode>
      <Header>
        {<Logo src={getCompanyLogo(company)} alt={name} />}
        <Location>{location}</Location>
        <PublishedDate>{dateHelper.ago(date)}</PublishedDate>
      </Header>
      <Position to={path}>
        {isNew && <New>NEW</New>}
        {title}
      </Position>
      {about && <About>{about}</About>}
    </JobItemNode>
  )
}

JobItem.propTypes = {
  city: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    about: PropTypes.string,
    logo: PropTypes.string
  }),
  date: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string
}

export default JobItem
