import * as React from "react";
import { HeadFC, Link } from "gatsby";
import { Layout } from "../components/layout";
import { ExternalLink } from "../components/external-link";
import AutumnSocietyMeetingInvidation from "../content/AutumnSocietyMeetingInvidation.mdx";
import SearchingForOfficers from "../content/SearchingForOfficers.mdx";
import {
  isAutumnSocietyMeetingInvitationDisplayed,
  isSpringSocietyMeetingInvitationDisplayed,
} from "../constants/societyMeetingDates";

const IndexPage = () => {
  return (
    <Layout>
      <>
        <h2>Hucan pitäjä</h2>

        <p>
          <span>
            Tervetuloa Hucan keskiaikaiseen pitäjään, eli Keskiaikaseura Hukka ry:n toimintaan. Elävöitämme keskiaikaa
            ja renessanssia pääkaupunkiseudulla.
          </span>
        </p>

        <p>
          <span>
            Tutkimme ja harrastamme keskiaikaista taistelua, tanssia, laulua, ruoanlaittoa, heraldiikkaa, puu- ja
            nahkatöitä, rakentelemme haarniskoita, ompelemme pukuja ja tutustumme keskiajan tapoihin.
          </span>
        </p>

        <p>
          <span>
            Hucan pitäjä on osa Aarnimetsän paronikuntaa eli Suomen keskiaikaseura ry:tä, joka taas on osa
            kansainvälistä Society for Creative Anachronism -järjestöä, joka pyrkii eri tavoin elävöittämään keskiajan
            ja renessanssin kulttuureja. Toimimme pääkaupunkiseudulla.
          </span>
        </p>

        <div>
          <span>Hukalla on monenlaista toimintaa:</span>
          <div>
            <ul>
              <li>
                <span>
                  Pääsääntöisesti viikottaisia sunnuntaitapaamisia Oulunkylän nuorisotalo Nuotalla. Tapaamisissa yleensä
                  on opetusta tai luennointia liittyen johonkin keskiaikaiseen käsityötekniikkaan tai muuhun aiheeseen
                  (esim. jousiammuntaa, tanssia yms.).
                </span>
              </li>
              <li>
                <span>
                  Viikottaisia taistelutreenejä (rottinkitaistelu, eli SCA heavy fighting) torstaisin. Kesäisin sään
                  salliessa treenaamme ulkona Kannelmäessä. Sateen sattuessa ja syyssäiden tullessa siirrymme Viikkiin
                  sisätiloihin. Kysy näistä marskilta lisää!
                </span>
              </li>
              <li>
                <span>
                  Viikonlopun mittaisia tai joskus myös pidempiä harrastajille tarkoitettuja keskiaikatapahtumia, joissa
                  pukeudutaan keskiaikaisesti, tehdään erilaisia keskiaikaan liittyviä aktiviteetteja (kuten
                  ruoanlaittoa, jousiammuntaa, taistelua, tanssia, laulua, käsitöitä ysm. ). Yleensä tapahtumissa on
                  myös keskiaikaiset erittäin kattavat pidot.
                </span>
              </li>
            </ul>

            <p>
              <Link to="/calendar">Kalenteri-sivulta</Link> löydät syksyn aikataulun. Erilaisista aktiviteeteistamme
              voit myös tarkemmin lukea lisää kattoseuramme&nbsp;
              <ExternalLink href="https://www.aarnimetsa.org/sivu-keskiaika-harrastuksena/">
                Suomen Keskiaikaseuran sivuilta.
              </ExternalLink>
            </p>
          </div>
        </div>

        <div>
          <h2 id="ajankohtaista">Ajankohtaista</h2>

          <div>
            <h3>Hukan pikkujoulut</h3>

            <div>
              <p>
                Hukan pikkujoulut ovat Nuotalla 17.12. Ohjelmassa on nyyttäreiden lisäksi ainakin vahapintoisten
                LED-kynttilöiden koristelemista. Ilmoittaudu 1.12. mennessä, niin vastuuhenkilö tuo tarvikkeita. Ohjeet
                ja lisätietoa löydät&nbsp;
                <ExternalLink href="https://www.facebook.com/groups/hukkary/posts/7043026609074513/">
                  Facebookista.
                </ExternalLink>
              </p>
            </div>
          </div>

          {isAutumnSocietyMeetingInvitationDisplayed() && (
            <>
              <AutumnSocietyMeetingInvidation />
              <SearchingForOfficers />
            </>
          )}

          {isSpringSocietyMeetingInvitationDisplayed() && <>{/* TODO */}</>}
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Hucan pitäjä</title>;
