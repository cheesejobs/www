import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import T from '../../../constants/texts.json'
import { List, ListItem, ListText, ListTitle } from 'Components'
import { Section, Title } from '../styled'

const Specs = ({ data }) => (
  <Section>
    <Title>Specs</Title>
    <List>
      {data.map(({ description, id }) => (
        <ListItem key={id}>
          <ListTitle>{T.specs[id]}</ListTitle>
          <ListText>{description}</ListText>
        </ListItem>
      ))}
    </List>
  </Section>
)

Specs.propTypes = {
  holiday: PropTypes.string,
  relocation: PropTypes.bool,
  remote: PropTypes.number,
  travel: PropTypes.number,
  working_hours: PropTypes.string,
  workload: PropTypes.number,
  workweek: PropTypes.number
}

export default Specs
