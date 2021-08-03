import styled from 'styled-components'
import Check from '../../images/check.svg'

export const Wrap = styled.label`
  input[type='checkbox'] {
    appearance: none;
    opacity: 0;
    position: absolute;
    // 擬似チェックボックス
    & + span::before {
      border: 1px solid #ccc;
      border-radius: 1px;
      content: '';
      display: inline-block;
      margin-right: 8px;
      height: 12px;
      width: 12px;
    }
    &:checked + span::before {
      background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%209.86%209.13%22%3E%3Cg%3E%3Cg%3E%3Cpath%20d%3D%22M4.61%2C9.13c0-.13%2C0-.3%2C0-.48C4.54%2C7.27%2C4%2C2.44%2C0%2C.64A2.31%2C2.31%2C0%2C0%2C0%2C.58%2C0C3.31%2C1.28%2C4.47%2C4%2C5%2C6.05A8.63%2C8.63%2C0%2C0%2C1%2C9.22%2C0a2.61%2C2.61%2C0%2C0%2C0%2C.64.59C5.57%2C2.77%2C5.56%2C7.75%2C5.48%2C9.13Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 6px;
    }
  }
`
