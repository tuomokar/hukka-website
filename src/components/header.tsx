import * as React from "react"
import styled from '@emotion/styled'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <Container>
      <div>
        <Title>Hucan pitäjä</Title>
      </div>

      <div>
        <Link to='/'>
          <StaticImage src="../images/hukka-device.png" alt="Hucan vaakuna" />
        </Link>
      </div>

      <div>
        <Link to='/'>Hucan pitäjä</Link>
        <Link to='/contact-info'>Yhteystiedot</Link>
        <Link to='/calendar'>Kalenteri</Link>
      </div>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const Title = styled.h1`
  text-align: center;
`

export { Header }