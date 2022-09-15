import * as React from "react"
import type { HeadFC } from "gatsby"
import styled from '@emotion/styled'
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { ExternalLink } from "../components/external-link"

const ContactInfoPage = () => {
  return (
    <Layout>
      <>
        <span>
          <LinkContainer>
            <ExternalLink href='https://facebook.com/groups/hukkary'>
              <>
                <StaticImage height={30} width={30} src="../images/facebook-logo.png" alt="Facebook-logo" />
                <LinkText>Hukka Facebookissa</LinkText>
              </>
            </ExternalLink>
          </LinkContainer>

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

const LinkContainer = styled.div`
  line-height: 30px;
`

const LinkText = styled.span`
  margin-left: 8px;
`


export default ContactInfoPage



export const Head: HeadFC = () => <title>Yhteystiedot</title>
