import * as React from "react";
import { HeadFC, Link } from "gatsby";
import { Layout } from "../components/layout";
import { ExternalLink } from "../components/external-link";
import AutumnSocietyMeetingInvidation from "../content/AutumnSocietyMeetingInvidation.mdx";
import SpringSocietyMeetingInvitation from "../content/SpringSocietyMeetingInvitation.mdx";
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
              <Link to="/calendar">Kalenteri-sivulta</Link> löydät aikatauluja. Erilaisista aktiviteeteistamme voit myös
              tarkemmin lukea lisää kattoseuramme&nbsp;
              <ExternalLink href="https://www.aarnimetsa.org/sivu-keskiaika-harrastuksena/">
                Suomen Keskiaikaseuran sivuilta.
              </ExternalLink>
            </p>
          </div>
        </div>

        <div>
          <h2 id="ajankohtaista">Ajankohtaista</h2>

          <div>
            <h3>Kevätkokous ja piknik 9.6.</h3>
            <div>
              <p>
                <span>
                  Sunnuntaina 9.6. järjestämme piknikin, jonka yhteydessä on myös yhdistyksen virallinen kevätkokous,
                  johon kaikki (myös ei-jäsenet) voivat osallistua. Piknikillä on tarkoitus tehdä omia käsitöitä sekä
                  syödä nyyttäri-mallilla. Piknik aloitetaan klo 13 se pidetään Oulunkylässä Mäkitorpanpuistossa Ogelin
                  kauppakeskuksen vastapäätä olevan leikkipuiston vieressä olevalla nurmialueella (jos aurinko kovasti
                  painaa, siellä on isoja puita varjoa tuomassa).
                </span>
              </p>
              <p>
                <span>
                  Mikäli sattuu olemaan huono sää, piknikin sijasta kokoonnumme voudin luona Helsingin Maunulassa
                  osoitteessa Maunulanmäki 1 F 72, 00630 Helsinki.
                </span>
              </p>
              <p>
                <span>
                  Virallinen yhdistyksen kokous pidetään piknikin yhteydessä klo 14 alkaen. Ks. alla virallinen kutsu.
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3>Kesän tapahtumat</h3>

            <div>
              <h4>Nuijasota</h4>

              <div>
                Kattoseuramme järjestämä Nuijasota on taas heinäkuussa. Luvassa reilun viikon ajan hauskanpitoa - joka
                päivä on monenlaista opetusta liittyen erilaisiin keskiaikaisiin asioihin. On myös jousiammuntaa,
                miekkailua yms. Tapahtuma on myös erittäin perheystävällinen. Voit tulla joko koko ajaksi tai
                päiväkäynnille tai esim. pariksi päiväksi. Tule rohkeasti mukaan! Lisätietoa tapahtumasta&nbsp;
                <ExternalLink href="https://cudgelwar.wordpress.com/">löytyy sen nettisivuilta</ExternalLink>
              </div>
            </div>
          </div>

          <div>
            <h3>2024 kesän ja syksyn toiminta</h3>

            <div>
              <p>
                <span>
                  26.5. on kevään viimeinen sunnuntaitapaaminen Nuotalla (uudetkin tervetuloa!), mutta sitten ne jäävät
                  tauolle. Kesäkuussa on luvassa pikniköintiä ja elokuun alkupuolella olemme mukana Helsingan
                  keskiaikapäivässä.
                </span>
              </p>
              <p>
                <span>Näiden lisäksi taistelutreenejä on lähes joka viikko myös kesän ajan.</span>
              </p>
              <p>
                <span>
                  Elokuun lopussa aloitamme taas viikottaiset sunnuntaitapaamiset erilaisten keskiaikateemaisten
                  aktiviteettien parissa.
                </span>
              </p>
            </div>
          </div>

          {isAutumnSocietyMeetingInvitationDisplayed() && (
            <>
              <AutumnSocietyMeetingInvidation />
              <SearchingForOfficers />
            </>
          )}

          {isSpringSocietyMeetingInvitationDisplayed() && <>{<SpringSocietyMeetingInvitation />}</>}
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Hucan pitäjä</title>;
