import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListText, ListTitle } from 'Components'
import { Section, Title } from '../styled'

import TEXTS from 'Constants/texts.json'

const ListCultureItem = ListItem.extend`
  justify-content: space-between;
`

const ListCultureTitle = ListTitle.extend`
  flex: none;
`

const ListCultureText = ListText.extend`
  flex: none;
`

const renderCultureItem = ({ id, value }) => (
  <ListCultureItem key={id}>
    <ListCultureTitle>{TEXTS.culture[id]}</ListCultureTitle>
    <ListCultureText>{value}</ListCultureText>
  </ListCultureItem>
)

const Culture = ({ culture }) => (
  <Section>
    <Title>Startup Culture</Title>
    <List>{culture.map(renderCultureItem)}</List>
  </Section>
)

Culture.propTypes = {
  culture: PropTypes.arrayOf(PropTypes.object)
}

export default Culture
