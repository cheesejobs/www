import React from 'react'
import styled from 'styled-components'
import { Link } from 'Components'

const Footer = styled.footer`
  padding: 1.2rem 1rem;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`

export default () => (
  <Footer>
    <Link to='/about'>About</Link>
    <span> / </span>
    <Link external to='https://twitter.com/nosuitjobs'>
      Twitter
    </Link>
    <span> / </span>
    <Link to='mailto:hello@nosuitjobs.com'>Contact</Link>
  </Footer>
)
