import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from '../../../helpers/responsive'
import { TEXTS } from 'Constants'
import { Icon, Tooltip } from 'Components'
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
  flex: 0 0 49.5%;
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

const Text = styled.span``

const UnderlineItem = styled(Item)`
  & ${Text} {
    border-bottom: 1px dotted ${({ theme }) => theme.colors.accent};
  }
`

const renderWithTooltip = ({ description, icon, id }) => (
  <UnderlineItem key={id}>
    <Tooltip content={description}>
      <ItemIcon value={icon} />
      <Text>{TEXTS.benefits[id]}</Text>
    </Tooltip>
  </UnderlineItem>
)

const renderWithoutTooltip = ({ description, icon, id }) => (
  <Item key={id}>
    <ItemIcon value={icon} />
    <Text>{TEXTS.benefits[id]}</Text>
  </Item>
)

const Benefits = ({ data }) => (
  <Section>
    <Title>Company Benefits</Title>
    <List>
      {data.map(
        item =>
          item.description
            ? renderWithTooltip(item)
            : renderWithoutTooltip(item)
      )}
    </List>
  </Section>
)

Benefits.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default Benefits
