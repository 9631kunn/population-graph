import React from 'react'
import styles from '../styles/Home.module.css'

import Header from './Header'
import Footer from './Footer'

type LayoutChildren = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutChildren): JSX.Element => (
  <div>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)

export default Layout
