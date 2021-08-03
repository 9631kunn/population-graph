import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    color: #363636;
    font-family: -apple-system, BlinkMacSystemFont,"游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", 'メイリオ', Meiryo,'Meiryo UI', sans-serif;
    margin: 0;
    padding: 0;
  }
`

export const theme = {
  maxMedia: {
    m: '768px'
  },
  minMedia: {
    m: '769px'
  },
  headerHeight: '60px'
}
