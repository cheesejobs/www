import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import T from '../../../constants/texts.json'
import { Icon, List, ListItem, ListText, ListTitle } from 'Components'
import { Section, Title } from '../styled'

const CustomIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.disabledIcon};
  margin-right: 0.5rem;

  ${props =>
    props.value === 'check' &&
    css`
      color: ${({ theme }) => theme.colors.accent};
    `};
`

const WorkMethodology = ({ data }) => (
  <Section>
    <Title>Workflow</Title>
    <List>
      {Object.keys(data).map(item => (
        <ListItem key={item}>
          <ListTitle>{T[item]}</ListTitle>
          <ListText>
            {data[item].active ? (
              <CustomIcon value='check' />
            ) : (
              <CustomIcon value='x' />
            )}
            {data[item].description || '-'}
          </ListText>
        </ListItem>
      ))}
    </List>
  </Section>
)

WorkMethodology.propTypes = {
  data: PropTypes.shape({
    agile_management: PropTypes.object,
    build_server: PropTypes.object,
    code_reviews: PropTypes.object,
    commit_first_day: PropTypes.object,
    tools_freedom: PropTypes.object,
    integration_tests: PropTypes.object,
    pair_programming: PropTypes.object,
    issue_tracking: PropTypes.object,
    one_command_build: PropTypes.object,
    statis_code_analyzer: PropTypes.object,
    unit_tests: PropTypes.object,
    testers: PropTypes.object,
    up_and_running_2h: PropTypes.object,
    version_control: PropTypes.object
  })
}

export default WorkMethodology
