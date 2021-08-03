import React from 'react'
import styled from 'styled-components'

const Wrap = styled.header`
  background: #fff;
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.29);
  height: ${({ theme }) => theme.headerHeight};
`

const Header = (): JSX.Element => {
  return (
    <Wrap>
      <h1>人口推移</h1>
    </Wrap>
  )
}

export default Header
