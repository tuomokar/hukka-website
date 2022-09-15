import * as React from "react"
import type { HeadFC } from "gatsby"
import styled from '@emotion/styled'
import { Layout } from "../components/layout"

const ContactInfoPage = () => {
  return (
    <Layout>
      <>
        <span>
          {/* TODO: Facebook link */}
          {/* TODO: Discord link or instructions? */}
          {/* TODO: email list join instructions? */}
          {/* TODO: Membership information link? */}
        </span>

        <div>
          <h2>Virkailijat</h2>
        </div>
      </>
    </Layout>

  )
}


export default ContactInfoPage



export const Head: HeadFC = () => <title>Yhteystiedot</title>
