import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from '../../../helpers/responsive'
import T from '../../../constants/texts.json'
import { Icon } from 'Components'
import { Section, Title } from '../styled'

const ItemIcon = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`

const List = styled.ul`
  display: flex;
  justify-content: evenly;
  flex-wrap: wrap;
`

const Item = styled.li`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  border-radius: 3px;
  flex: 0 0 49.5%;
  text-align: center;
  margin-right: 1%;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:nth-child(2n) {
    margin-right: 0;
  }

  ${media.tablet`
    flex: 0 0 100%;
    margin-right: 0;
  `};
`

const Benefits = ({ data }) => (
  <Section>
    <Title>Benefits</Title>
    <List>
      {data.map(({ description, icon, id }) => (
        <Item key={id}>
          <ItemIcon value={icon} />
          {T.benefits[id]}
        </Item>
      ))}
    </List>
  </Section>
)

Benefits.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default Benefits
