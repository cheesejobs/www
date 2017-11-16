import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from '../../../helpers/responsive'
import { TEXTS } from 'Constants'
import { Section, Title } from '../styled'

const People = styled.p`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 300;
`

const TeamList = styled.ul`
  display: flex;
  justify-content: evenly;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

const Team = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: capitalize;
  font-size: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 3px;
  flex: 0 0 18.4%;
  text-align: center;
  padding: 0.5rem;
  margin-right: 2%;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;

  &:nth-child(5n + 5) {
    margin-right: 0;
  }

  ${media.tablet`
    flex: 0 0 32%;

    margin-right: 2%;

    &:nth-child(5n+5) {
      margin-right: 2%;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  `};
`

const Name = styled.span`
  line-height: 1;
`

const TeamDistribution = ({ data }) => (
  <Section>
    <Title>Team Distribution</Title>
    <TeamList>
      {data.map(({ id, value }) => (
        <Team key={id}>
          <People>{value}</People>
          <Name>{TEXTS[id]}</Name>
        </Team>
      ))}
    </TeamList>
  </Section>
)

TeamDistribution.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default TeamDistribution
