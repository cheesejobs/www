import React from 'react'
import PropTypes from 'prop-types'
import media from '../../../helpers/responsive'
import { List, ListItem } from 'Components'
import { Subsection, Section, Subtitle, Title } from '../styled'

const CustomList = List.extend`
  padding: 1.5rem 1rem 0 2rem;

  ${media.tablet`
    padding-left: 1rem;
  `};
`

const CircleListItem = ListItem.extend`
  display: list-item;
  list-style: circle;
  line-height: 26px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Requirements = ({ data: requirements }) => (
  <Section>
    <Title>Requirements</Title>
    {requirements.map(({ name, content }) => (
      <Subsection key={name}>
        <Subtitle>{name}</Subtitle>
        <CustomList>
          {content.map(item => (
            <CircleListItem key={item}>{item}</CircleListItem>
          ))}
        </CustomList>
      </Subsection>
    ))}
  </Section>
)

Requirements.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default Requirements
