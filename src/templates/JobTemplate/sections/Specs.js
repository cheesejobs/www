import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  AmountBar,
  Icon,
  List,
  ListItem,
  ListText,
  ListTitle
} from '../../../components'
import { Section, Title } from '../styled'

const CustomIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.disabledIcon};
  margin-right: 0.5rem;

  ${props =>
    props.value === 'check' &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `};
`

const Specs = ({
  holiday,
  relocation,
  remote,
  travel,
  working_hours,
  workload,
  workweek
}) => (
  <Section>
    <Title>Specs</Title>
    <List>
      <ListItem>
        <ListTitle>Workload</ListTitle>
        <ListText>
          <AmountBar amount={workload} showAmount />
        </ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Workweek</ListTitle>
        <ListText>{workweek} hours</ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Holiday</ListTitle>
        <ListText>{holiday}</ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Working hours</ListTitle>
        <ListText>{working_hours}</ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Travel involved</ListTitle>
        <ListText>
          <AmountBar amount={travel} showAmount />
        </ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Remote possible</ListTitle>
        <ListText>
          <AmountBar amount={remote} showAmount />
        </ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Relocation package</ListTitle>
        <ListText>
          {relocation ? <CustomIcon value='check' /> : <CustomIcon value='x' />}
        </ListText>
      </ListItem>
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
