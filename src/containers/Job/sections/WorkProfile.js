import React from 'react'
import PropTypes from 'prop-types'
import T from '../../../constants/texts.json'
import { AmountBar, List, ListItem, ListText, ListTitle } from 'Components'
import { Section, Title } from '../styled'

const COLORS = {
  newFeatures: '#FFCE56',
  maintenance: '#FF6384',
  clientSupport: '#36A2EB',
  documentWriting: '#4BC0C0',
  meetings: '#A593E0'
}

const WorkProfile = ({ data }) => {
  const categories = Object.keys(data)

  const info = categories.reduce((acum, category) => {
    const amount = data[category]
    const offset = Object.values(acum).reduce(
      (sum, item = { amount: 0 }) => sum + item.amount,
      0
    )
    return Object.assign(acum, { [category]: { amount, offset } })
  }, {})

  return (
    <Section>
      <Title>Work Profile</Title>
      <List>
        {Object.keys(info).map(item => (
          <ListItem key={item}>
            <ListTitle>{T[item]}</ListTitle>
            <ListText>
              <AmountBar
                offset={info[item].offset}
                amount={info[item].amount}
                color={COLORS[item]}
                showAmount
              />
            </ListText>
          </ListItem>
        ))}
      </List>
    </Section>
  )
}

WorkProfile.propTypes = {
  data: PropTypes.shape({
    new_features: PropTypes.number,
    maintenance: PropTypes.number,
    client_support: PropTypes.number,
    document_writing: PropTypes.number,
    meetings: PropTypes.number
  })
}

export default WorkProfile
