import React from 'react'
import { Header, Footer } from 'Components'
import { Wrapper, Content } from './styled'

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
)

export default Layout
