import * as React from "react"
import type { HeadFC } from "gatsby"
import styled from '@emotion/styled'

const IndexPage = () => {
  return (
    <Main>
      <div>
        <Title>Hukan pitäjä</Title>
      </div>

        <div>
          some text here
        </div>
    </Main>
  )
}

const Main = styled.main`
  color: "#232129";
  padding: 96;
  fontFamily: "-apple-system, Roboto, sans-serif, serif";

  max-width: 500px;
  margin: auto;
`

const Title = styled.h1`
  text-align: center;
`

export default IndexPage



export const Head: HeadFC = () => <title>Home Page</title>
