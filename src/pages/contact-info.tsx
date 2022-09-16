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
        <div>
          <h2>Yhteystiedot</h2>
        </div>

        <div>
          <h3>Virkailijat</h3>

          <Officers />
        </div>

        <div>
          <h3>Muuta:</h3>

          <FacebookLinkContainer>
            <ExternalLink href='https://facebook.com/groups/hukkary'>
              <>
                <StaticImage height={30} src="../images/facebook-logo.png" alt="Facebook logo" />
                <LinkText>Hukka Facebookissa</LinkText>
              </>
            </ExternalLink>
          </FacebookLinkContainer>

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


const FacebookLinkContainer = styled.div`
  line-height: 30px;
  margin-bottom: 16px;
`

const LinkText = styled.span`
  margin-left: 8px;
`

const InformationTitle = styled.h3`
  margin-bottom: 4px;
`

export default ContactInfoPage

export const Head: HeadFC = () => <title>Hucan pitäjä - Yhteystiedot</title>
