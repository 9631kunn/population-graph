import React from 'react'
import { Wrap } from '../styles/components/footer'
import { Container } from '../styles/components/container'

const Footer = (): JSX.Element => (
  <Wrap>
    <Container>
      <small className="copyright">
        Powered by <a href="https://">Vercel</a> / Next.js / RESAS API /
        Highchart
      </small>
    </Container>
  </Wrap>
)

export default Footer
