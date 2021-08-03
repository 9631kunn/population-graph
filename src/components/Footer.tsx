import React from 'react'
import { Wrap } from '../styles/components/footer'
import { Container } from '../styles/components/container'

const Footer = (): JSX.Element => (
  <Wrap>
    <Container>
      <small className="copyright">
        Powered by
        <a href="https://vercel.com/">Vercel</a>
        <a href="https://nextjs.org/">Next.js</a>
        <a href="https://opendata.resas-portal.go.jp/">RESAS API</a>
        <a href="https://www.highcharts.com/">Highcharts</a>
      </small>
    </Container>
  </Wrap>
)

export default Footer
