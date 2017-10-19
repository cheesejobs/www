import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from '../../../helpers/responsive'
import { Icon } from 'Components'
import { Section, Title } from '../styled'

const TechIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`

const TechList = styled.ul`
  display: flex;
  justify-content: evenly;
  flex-wrap: wrap;
`

const TechItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: capitalize;
  font-size: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 3px;
  flex: 0 0 18.4%;
  text-align: center;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-right: 2%;

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

const Technologies = ({ data }) => (
  <Section>
    <Title>Technologies</Title>
    <TechList>
      {data.map(({ name }) => (
        <TechItem key={name}>
          <TechIcon value={name} />
          {name}
        </TechItem>
      ))}
    </TechList>
  </Section>
)

Technologies.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default Technologies
