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

const JobListItem = props => {
  const { date, company, path, specs, title } = props
  const location = specs.find(item => item.id === 'location').description
  const { name, about, logo } = company
  const isNew = dateHelper.inLast24Hours(date)

  return (
    <JobItemNode>
      <Header>
        {logo && <Logo src={logo} alt={name} />}
        <Location>{location}</Location>
        <PublishedDate>{dateHelper.ago(date)}</PublishedDate>
      </Header>
      <Position to={path}>
        {isNew && <New>NEW</New>}
        {title} @ {name}
      </Position>
      {about && <About>{about}</About>}
    </JobItemNode>
  )
}

JobListItem.propTypes = {
  city: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    about: PropTypes.string,
    logo: PropTypes.string
  }),
  date: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string
}

export default JobListItem
