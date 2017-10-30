/* global URL, btoa, FileReader */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'unfetch'

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

const JobListItem = class extends Component {
  constructor (props) {
    super(props)
    this.fetchLogo = this.fetchLogo.bind(this)
    this.state = { logo: null }
  }

  fetchLogo (domain) {
    fetch(`https://logo.clearbit.com/${domain}?size=128`)
      .then(res => res.blob())
      .then(blob => {
        const reader = new FileReader()
        reader.addEventListener('loadend', () => {
          const base64 = btoa(
            String.fromCharCode(...new Uint8Array(reader.result))
          )
          const logo = `data:image/png;base64, ${base64}`
          this.setState({ logo })
        })

        reader.readAsArrayBuffer(blob)
      })
  }

  componentDidMount () {
    const { hostname } = new URL(this.props.company.url)
    this.fetchLogo(hostname)
  }

  render () {
    const { date, company, path, specs, title } = this.props
    const location = specs.find(item => item.id === 'location').description
    const { name, about } = company
    const isNew = dateHelper.inLast24Hours(date)

    return (
      <JobItemNode>
        <Header>
          {<Logo src={this.state.logo} alt={name} />}
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
