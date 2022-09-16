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
        <LinkContainer>
          <ExternalLink href='https://facebook.com/groups/hukkary'>
            <>
              <StaticImage height={30} src="../images/facebook-logo.png" alt="Facebook logo" />
              <LinkText>Hukka Facebookissa</LinkText>
            </>
          </ExternalLink>
        </LinkContainer>

        <div>
          <h2>Virkailijat</h2>
        </div>

        <Officers />

        <div>
          <h2>Muuta:</h2>

          <div>
            <StaticImage height={30} src="../images/discord-logo.png" alt="Discord logo" />
            <div>
              <span>Pyydä kutsu esim. voudilta</span>
            </div>
          </div>

          <div>
            <InformationTitle>Sähköpostilista</InformationTitle>
            <div>
              <span>Lähetä sähköposti webvastaavalle, että haluaisit listalle. Listalle ei tule spammia, vaan
                    Hucan tärkeimmät tiedotteet</span>
            </div>
          </div>

          <div>
            <InformationTitle>Jäseneksi liittyminen</InformationTitle>
            <div>
              <span>
                Voit tulla mukaan kaikkeen toimintaamme myös ilman jäsenyyttä, mutta jäsenet saavat etuja tapahtumamaksuissa
                ja jäsenmaksu tukee yhdistyksen toimintaa.
              </span>
              <p />
              <span>Lisätietoa jäseneksi liittymisestä ja jäsenlomakkeen linkin löydät kattoseuramme </span>
              <ExternalLink href='https://www.aarnimetsa.org/keskiaikaseura-yhdistyksena/jasenyys/'>
                Suomen keskiaikaseura ry:n sivuilta.
              </ExternalLink>
            </div>
          </div>

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

const OfficerContainer = styled.div`
  margin-top: 8px;
`

const OfficerLineText = styled.span`
  display: block;
`

const InformationTitle = styled.h3`
  margin-bottom: 4px;
`

export default ContactInfoPage

export const Head: HeadFC = () => <title>Hucan pitäjä - Yhteystiedot</title>
