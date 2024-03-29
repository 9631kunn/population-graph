import styled from 'styled-components'

export const Wrap = styled.header`
  align-items: center;
  background: #fff;
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.29);
  display: flex;
  height: ${({ theme }) => theme.headerHeight + 'px'};

  .title {
    align-items: center;
    display: flex;
    justify-content: center;
    span {
      font-weight: 100;
    }
  }
`
