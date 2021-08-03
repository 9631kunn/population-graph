import styled from 'styled-components'

export const Wrap = styled.footer`
  background: #eee;
  margin-top: 10px;
  padding: 5px 0;

  .copyright {
    display: block;
    text-align: center;

    a {
      color: #111;
      font-weight: 600;
      text-decoration: none;
      margin-left: 5px;
      &:not(:last-child)::after {
        content: '/';
        margin-left: 5px;
      }
    }
  }
`
