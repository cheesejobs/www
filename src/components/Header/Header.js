import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { HeaderNode, Logo, Nav, Wrapper } from './styled'

const Header = ({ children }) => (
  <HeaderNode>
    <Wrapper>
      <Link to='/'>
        <Logo src='/img/logo.png' alt='' />
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
