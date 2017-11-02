import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = styled.footer`
  padding: 1.2rem 1rem;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default () => (
  <Footer>
    <FooterLink to='/about'>About</FooterLink>
    <span> / </span>
    <FooterLink target='_blank' to='https://twitter.com/nosuitjobs'>
      Twitter
    </FooterLink>
    <span> / </span>
    <FooterLink to='mailto:hello@nosuitjobs.com'>Contact</FooterLink>
  </Footer>
)
