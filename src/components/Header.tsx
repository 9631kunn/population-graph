import React from 'react'
import { useRouter } from 'next/router'
import { Wrap } from '../styles/components/header'
import { Container } from '../styles/components/container'

import Logo from './Logo'
import LogoText from '../images/logo-text.svg'

const Header = (): JSX.Element => {
  // location.pathnameによってタグ変更
  const router = useRouter()
  let titleTag: JSX.Element
  if (router.pathname === '/') {
    titleTag = (
      <h1 className="title">
        <LogoText width="130" height="30" />
        <Logo />
      </h1>
    )
  } else {
    titleTag = (
      <h3 className="title">
        <LogoText width="130" height="30" />
        <Logo />
      </h3>
    )
  }

  return (
    <Wrap>
      <Container>{titleTag}</Container>
    </Wrap>
  )
}

export default Header
