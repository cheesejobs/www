import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Icon, List, ListItem, ListText, ListTitle } from 'Components'
import { Section, Title } from '../styled'

const OsIcon = styled(Icon)`
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.divider};

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.colors.accent};
    `};
`

const Equipment = ({ computer, monitors, operating_system }) => (
  <Section>
    <Title>Equipment</Title>
    <List>
      <ListItem>
        <ListTitle>Computer</ListTitle>
        <ListText>{computer}</ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Monitors</ListTitle>
        <ListText>{monitors}</ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Operating System</ListTitle>
        <ListText>
          {Object.keys(operating_system).map(os => (
            <OsIcon key={os} value={os} active={operating_system[os]} />
          ))}
        </ListText>
      </ListItem>
    </List>
  </Section>
)

Equipment.propTypes = {
  computer: PropTypes.string,
  monitors: PropTypes.string,
  operating_system: PropTypes.shape({
    linux: PropTypes.bool,
    mac: PropTypes.bool,
    windows: PropTypes.bool
  })
}

export default Equipment
