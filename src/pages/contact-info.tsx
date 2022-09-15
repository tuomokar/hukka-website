import * as React from "react"
import type { HeadFC } from "gatsby"
import styled from '@emotion/styled'
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { ExternalLink } from "../components/external-link"
import { Officers } from "../components/officers"

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
        </span>

        <div>
          <h2>Virkailijat</h2>
        </div>

        <Officers />


        {/* TODO: Membership information link? */}
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

const OfficerContainer = styled.div`
  margin-top: 8px;
`

const OfficerLineText = styled.span`
  display: block;
`



export default ContactInfoPage



export const Head: HeadFC = () => <title>Yhteystiedot</title>
