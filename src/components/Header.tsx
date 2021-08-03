import React from 'react'
import styled from 'styled-components'

const Wrap = styled.header`
  background: #ccc;
`

const Header = (): JSX.Element => (
  <Wrap>
    <h1>人口推移</h1>
  </Wrap>
)

export default Header
