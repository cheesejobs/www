import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { dateHelper, getCompanyLogo } from 'Helpers'
import { Icon } from 'Components'
import { Section } from '../styled'
import { TEXTS } from 'Constants'

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
  margin: 1rem 0 0.5rem;

  & > a {
    color: var(--color-text);
  }
`

const CompanyLogo = styled.img`
  margin-bottom: 1rem;
  height: 100%;
  width: 80px;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0;
`

const DescriptionTitle = styled.h3`
  font-size: 1rem;
  margin: 1rem 0;
`

const DescriptionText = styled.p`
  margin-bottom: 2rem;
  line-height: 26px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textPrimary};
`

const renderDescription = (title, text, companyName) => (
  <div key={title}>
    <DescriptionTitle>{title.replace('%s', companyName)}</DescriptionTitle>
    <DescriptionText>{text}</DescriptionText>
  </div>
)

const Header = ({ company, date, title, description, ...props }) => (
  <Section>
    <Top>
      <Back to='/'>
        <Icon value='arrow_left' /> Go back
      </Back>
      <PublishedDate>{dateHelper.ago(date)}</PublishedDate>
    </Top>

    <Title>
      <CompanyLogo src={getCompanyLogo(company)} />

      <div style={{ textAlign: 'center' }}>
        <Position>{title}</Position>
        <Company>
          <Link to={company.url}>at {company.name}</Link>
        </Company>
      </div>
    </Title>

    {Object.keys(description).map(title =>
      renderDescription(
        TEXTS.description[title],
        description[title],
        company.name
      )
    )}
  </Section>
)

Header.propTypes = {
  date: PropTypes.string,
  description: PropTypes.object,
  name: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Header
