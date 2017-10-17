import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Icon,
  List,
  ListItem,
  ListText,
  ListTitle,
  Tooltip
} from '../../../components'
import { Section, Title } from '../styled'

const CustomTitle = ListTitle.extend`
  flex: 1 1 10%;
`

const getIconSize = size => {
  if (size < 10) return 'team_small'
  if (size < 20) return 'team_medium'
  return 'team_big'
}

const CustomIcon = styled(Icon)`
  margin-right: 0.5rem;
`

const Tag = styled.span`
  text-transform: capitalize;
`

const currencySymbols = {
  GBP: 'pound',
  Euro: 'euro',
  Dollar: 'dollar'
}

const About = ({ location, salary, company_size, keywords }) => {
  const currencySymbol = currencySymbols[salary.currency]

  return (
    <Section>
      <Title>
        About
        <Tooltip content='Basic information about the company like location, salary...'>
          <CustomIcon value='help' />
        </Tooltip>
      </Title>
      <List>
        <ListItem>
          <CustomTitle>Mission</CustomTitle>
          <ListText>
            Make Cloud Computing as Easy and Accessible as Mobile computing.
          </ListText>
        </ListItem>
        <ListItem>
          <CustomTitle>Location</CustomTitle>
          <ListText>
            <CustomIcon value='location' />
            {location.city}, {location.country}
          </ListText>
        </ListItem>
        <ListItem>
          <CustomTitle>Salary (gross)</CustomTitle>
          <ListText>
            {currencySymbol && <CustomIcon value={currencySymbol} />}
            {salary.from} to {salary.to} {salary.currency}
          </ListText>
        </ListItem>
        <ListItem>
          <CustomTitle>Sector</CustomTitle>
          <ListText>
            <CustomIcon value='tags' />
            {keywords.map((keyword, index) => {
              const trailling = index !== keywords.length - 1 ? ', ' : ''
              return (
                <Tag key={keyword}>
                  {keyword}
                  {trailling}
                </Tag>
              )
            })}
          </ListText>
        </ListItem>
        <ListItem>
          <CustomTitle>Company size</CustomTitle>
          <ListText>
            <CustomIcon value={getIconSize(company_size)} />
            {company_size}
          </ListText>
        </ListItem>
      </List>
    </Section>
  )
}

About.propTypes = {
  company_size: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    street: PropTypes.string,
    postalCode: PropTypes.string
  }),
  salary: PropTypes.shape({
    currency: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string
  })
}

export default About
