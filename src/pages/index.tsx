import * as React from "react"
import type { HeadFC } from "gatsby"
import { Layout } from "../components/layout"
import { ExternalLink } from "../components/external-link"

const IndexPage = () => {
  return (
    <Layout>
      <>
        <h2>Hucan pitäjä</h2>

        <p>
          <span>
            Tervetuloa Hucan keskiaikaiseen pitäjään!
          </span>
        </p>

        <p>
          <span>
            Meitä yhdistää kiinnostus keskiaikaan ja renessanssiin.
            Tutkimme ja harrastamme keskiaikaista taistelua, tanssia, laulua, ruoanlaittoa, heraldiikkaa, puu- ja nahkatöitä,
            rakentelemme haarniskoita, ompelemme pukuja ja tutustumme keskiajan tapoihin.
          </span>
        </p>

        <p>
          <span>
            Hucan pitäjä on osa Aarnimetsän paronikuntaa eli Suomen keskiaikaseura ry:tä, joka taas on osa
            kansainvälistä Society for Creative Anachronism -järjestöä, joka pyrkii eri tavoin elävöittämään
            keskiajan ja renessanssin kulttuureja.
          </span>
        </p>

        <div>
          <span>Hukalla on monenlaista toimintaa:</span>
        <div>
          <ul>
            <li>
              <span>
                Pääsääntöisesti viikottaisia sunnuntaitapaamisia Oulunkylän nuorisotalo Nuotalla.
                Tapaamisissa yleensä on opetusta tai luennointia liittyen johonkin keskiaikaiseen käsityötekniikkaan
                tai muuhun aiheeseen.
              </span>
            </li>
            <li>
              <span>
                Viikottaisia taistelutreenejä Viikissä torstaisin (rottinkitaistelu, eli SCA heavy fighting). Kysy näistä marskilta lisää.
              </span>
            </li>
            <li>
              <span>
                Viikonlopun mittaisia tai joskus myös pidempiä harrastajille tarkoitettuja keskiaikatapahtumia, joissa pukeudutaan keskiaikaisesti,
                tehdään erilaisia keskiaikaan liittyviä aktiviteetteja (kuten ruoanlaittoa, jousiammuntaa, taistelua, tanssia, laulua, käsitöitä ysm. ).
                Yleensä tapahtumissa on myös keskiaikaiset erittäin kattavat pidot.
              </span>
            </li>
          </ul>

          <span>
            Erilaisista aktiviteeteistamme voit lukea lisää kattoseuramme&nbsp;
            <ExternalLink href='https://www.aarnimetsa.org/sivu-keskiaika-harrastuksena/'>
              Suomen Keskiaikaseuran sivuilta
            </ExternalLink>
          </span>
        </div>
      </div>
      </>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hucan pitäjä</title>
