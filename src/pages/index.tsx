import * as React from "react"
import type { HeadFC } from "gatsby"
import { Layout } from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>


      <div>
        some text here
      </div>
    </Layout>
  )
}

export default IndexPage



export const Head: HeadFC = () => <title>Kotisivu</title>
