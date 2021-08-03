import styled from 'styled-components'

export const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 40px auto 0;
  max-width: ${({ theme }) => theme.contentArea + 'px'};
  padding: 0 10px;

  li {
    margin: 10px 10px 0 0;
    min-width: 100px;
    @media (max-width: ${({ theme }) => theme.maxMedia.m}) {
      font-size: 12px;
      min-width: 70px;
    }
  }
`
