import styled from 'styled-components'

export const Wrap = styled.svg`
  height: 40px;
  margin-left: 10px;
  margin-top: 10px;
  width: 50px;

  g {
    fill: ${({ theme }) => theme.color};
  }

  path {
    opacity: 0;
    &.fadeIn {
      transition: opacity 0.3s;
      opacity: 1;
    }
  }
`
