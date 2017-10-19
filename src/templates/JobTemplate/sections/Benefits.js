import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from '../../../helpers/responsive'
import T from '../../../constants/texts.json'
import { Icon } from '../../../components'
import { Section, Title } from '../styled'

const PERKS_ICON = {
  BikeParking: 'bike',
  ConferenceBudget: 'conference',
  FreeBeverages: 'beverage',
  FreeCoffee: 'coffee',
  FreeSnacks: 'food',
  InHouseHackDays: 'computer',
  InHouseTrainings: 'home',
  Kitchen: 'kitchen',
  MobilePhone: 'mobile',
  PlayRoom: 'games',
  PrivateHealthCare: 'health',
  Shower: 'shower',
  GymSubscription: 'gym',
  TeamEvents: 'group',
  TrainingBudget: 'university'
}

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

const Additional = ({ data }) => (
  <Section>
    <Title>Benefits</Title>
    <List>
      {Object.keys(data).map(item => {
        if (!data[item]) return null

        return (
          <Item key={item}>
            <ItemIcon value={PERKS_ICON[item]} />
            {T[item]}
          </Item>
        )
      })}
    </List>
  </Section>
)

Additional.propTypes = {
  data: PropTypes.shape({
    BikeParking: PropTypes.bool,
    ConferenceBudget: PropTypes.bool,
    FreeBeverages: PropTypes.bool,
    FreeCoffee: PropTypes.bool,
    FreeSnacks: PropTypes.bool,
    InHouseHackDays: PropTypes.bool,
    InHouseTrainings: PropTypes.bool,
    Kitchen: PropTypes.bool,
    MobilePhone: PropTypes.bool,
    PlayRoom: PropTypes.bool,
    PrivateHealthCare: PropTypes.bool,
    Shower: PropTypes.bool,
    GymSubscription: PropTypes.bool,
    TeamEvents: PropTypes.bool,
    TrainingBudget: PropTypes.bool
  })
}

export default Additional
