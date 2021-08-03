import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import { Container } from '../styles/components/container'

type LayoutChildren = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutChildren): JSX.Element => (
  <div>
    <Header />
    <main>
      <Container>{children}</Container>
    </main>
    <Footer />
  </div>
)

export default Layout
