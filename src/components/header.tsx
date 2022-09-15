import * as React from "react"
import styled from '@emotion/styled'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <Container>
      <div>
        <Title>Hukan pitäjä</Title>
      </div>

      <div>
        <Link to='/'>
          <StaticImage src="../images/hukka-vaakuna.png" alt="Hukan vaakuna" />
        </Link>
      </div>

      <div>
        <Link to='/'>Hukan pitäjä</Link>
        <Link to='/contact-info'>Yhteystiedot</Link>
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