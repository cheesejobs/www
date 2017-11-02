import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'Components'
import { Name, Description, HeaderNode, Logo, Nav, Wrapper } from './styled'

const Header = ({ children }) => (
  <HeaderNode>
    <Wrapper>
      <Link to='/'>
        <Logo src='/img/logo.png' alt='nosuitjobs logo' />
        <Name>nosuitjobs</Name>
        <Description>Classy jobs for tech people</Description>
      </Link>
      <Nav>
        <Link to='/help'>Ask us anything</Link>
        <Button>Post new offer</Button>
      </Nav>
    </Wrapper>
    {children}
  </HeaderNode>
)

Header.propTypes = {
  children: PropTypes.node
}

export default Header
