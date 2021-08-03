import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/themes/theme'
import { GlobalStyles } from '../styles/themes/globalStyles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
