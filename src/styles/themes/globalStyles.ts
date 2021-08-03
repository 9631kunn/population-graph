import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,*::before, *::after{
    box-sizing: border-box;
    font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont,"游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", 'メイリオ', Meiryo,'Meiryo UI', sans-serif;
    margin: 0;
    padding: 0;
  }
`
