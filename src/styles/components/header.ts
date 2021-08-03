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
      font-family: ${({ theme }) => theme.font.logo};
      font-weight: 100;
    }
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.contentArea + 'px'};
  padding: 0 10px;
  width: 100%;
`
