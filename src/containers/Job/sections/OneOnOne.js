import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Icon, List, ListItem, ListText, ListTitle } from 'Components'
import { Section, Title } from '../styled'

const CustomIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.disabledIcon};

  ${props =>
    props.value === 'check' &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `};
`

const OneOnOne = ({
  project_change,
  regular_evaluation,
  architecture_choice,
  convention_choice,
  technolgies_choice
}) => (
  <Section>
    <Title>One on One</Title>
    <List>
      <ListItem>
        <ListTitle>Project change possible?</ListTitle>
        <ListText>
          {project_change ? (
            <CustomIcon value='check' />
          ) : (
            <CustomIcon value='x' />
          )}
        </ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Regular employee evaluation?</ListTitle>
        <ListText>
          {regular_evaluation ? (
            <CustomIcon value='check' />
          ) : (
            <CustomIcon value='x' />
          )}
        </ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Who chooses architecture?</ListTitle>
        <ListText>{architecture_choice}</ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Who chooses technologies?</ListTitle>
        <ListText>{technolgies_choice}</ListText>
      </ListItem>
      <ListItem>
        <ListTitle>Who chooses convention?</ListTitle>
        <ListText>{convention_choice}</ListText>
      </ListItem>
    </List>
  </Section>
)

OneOnOne.propTypes = {
  architecture_choice: PropTypes.string,
  convention_choice: PropTypes.string,
  project_change: PropTypes.bool,
  regular_evaluation: PropTypes.bool,
  technolgies_choice: PropTypes.string
}

export default OneOnOne
