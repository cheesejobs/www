import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import dateHelper from '../../../helpers/date'
import { Icon } from '../../../components'
import { Section } from '../styled'

const Back = styled(Link)`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  text-transform: uppercase;

  & > span {
    text-transform: none;
    margin-right: 0.2rem;
    width: 0.8rem;
    width: 0.8rem;
  }
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PublishedDate = styled.span`
  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Position = styled.h1`
  font-size: 2rem;
  margin: 1rem 0 0.5rem;
`

const Company = styled.div`
  position: relative;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  & > a {
    color: var(--color-text);
  }
`

const Paraph = styled.p`
  margin-bottom: 2rem;
  line-height: 26px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textPrimary};
`

const Header = ({ date, position, url, name, description }) => (
  <Section>
    <Top>
      <Back to='/'>
        <Icon value='arrow_left' /> Go back
      </Back>
      <PublishedDate>{dateHelper.ago(date)}</PublishedDate>
    </Top>
    <Position>{position}</Position>
    <Company>
      <Link to={url}>{name}</Link>
    </Company>
    <div>
      {description
        .split('\n\n')
        .map(paraph => <Paraph key={paraph}>{paraph}</Paraph>)}
    </div>
  </Section>
)

Header.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  url: PropTypes.string
}

export default Header
