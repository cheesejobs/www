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

const ListTextLeft = styled(ListText)`
  flex: 0;
`

const WorkMethodology = ({ data }) => (
  <Section>
    <Title>Work Methodology</Title>
    <List>
      {data.map(({ value, description, id }) => (
        <ListItem key={id}>
          <ListTitle>{T.workMethodology[id]}</ListTitle>
          <ListTextLeft>
            {value ? <CustomIcon value='check' /> : <CustomIcon value='x' />}
          </ListTextLeft>
        </ListItem>
      ))}
    </List>
  </Section>
)

WorkMethodology.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string,
      value: PropTypes.boolean
    })
  )
}

export default WorkMethodology
