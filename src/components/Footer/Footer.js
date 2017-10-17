import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = styled.footer`
  padding: 1.2rem 1rem;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;

  & > a {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default () => (
  <Footer>
    <Link to='/'>Site Terms</Link> & <Link to='/'>Conditions</Link> for use and
    our Privacy Policy apply. © 2017 Cheesjobs. All References marked with a ™
    or ® are trademarks of Cheesjobs. All rights reserved.
  </Footer>
)
