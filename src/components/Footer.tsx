import React from 'react'
import styled from 'styled-components'

const Wrap = styled.footer`
  background: #eee;
`

const Footer = (): JSX.Element => (
  <Wrap>
    <small>Powered by Vercel / Next.js / RESAS API / Highchart</small>
  </Wrap>
)

export default Footer
