import React from 'react'
import PropTypes from 'prop-types'
import { Step } from 'Components'
import { Section, Title } from '../styled'

const Recruiting = ({ steps }) => (
  <Section>
    <Title>Hiring</Title>
    {steps.map(step => <Step key={step.title} {...step} />)}
  </Section>
)

Recruiting.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object)
}

Recruiting.defaultProps = {
  steps: []
}

export default Recruiting
