import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

type LayoutChildren = {
  children: React.ReactNode
}

const Wrap = styled.div``

const Main = styled.main`
  background: #ddd;
`

const Layout = ({ children }: LayoutChildren): JSX.Element => (
  <Wrap>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrap>
)

export default Layout
