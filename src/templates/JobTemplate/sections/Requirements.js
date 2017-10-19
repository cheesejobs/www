import React from 'react'
import PropTypes from 'prop-types'
import media from '../../../helpers/responsive'
import { List, ListItem } from '../../../components'
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

const Requirements = ({ data: { requeriments, nices, responsabilities } }) => (
  <Section>
    <Title>Requirements</Title>
    {[
      { subtitle: 'Responsabilities', data: responsabilities },
      { subtitle: 'Requeriments', data: requeriments },
      { subtitle: 'Nice to have', data: nices }
    ].map(({ subtitle, data }) => (
      <Subsection key={subtitle}>
        <Subtitle>{subtitle}</Subtitle>
        <CustomList>
          {data.map(item => <CircleListItem key={item}>{item}</CircleListItem>)}
        </CustomList>
      </Subsection>
    ))}
  </Section>
)

Requirements.propTypes = {
  data: PropTypes.shape({
    requeriments: PropTypes.arrayOf(PropTypes.object),
    responsabilities: PropTypes.arrayOf(PropTypes.object),
    nices: PropTypes.arrayOf(PropTypes.object)
  })
}

export default Requirements
