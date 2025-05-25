import * as React from "react";
import { HeadFC, Link } from "gatsby";
import { Layout } from "../components/layout";
import { ExternalLink } from "../components/external-link";
import AutumnSocietyMeetingInvidation from "../content/AutumnSocietyMeetingInvidation.mdx";
import SpringSocietyMeetingInvitation from "../content/SpringSocietyMeetingInvitation.mdx";
import MainPageTopicalThings from "../content/MainPageTopicalThings.mdx";
import SearchingForOfficers from "../content/SearchingForOfficers.mdx";
import {
  isAutumnSocietyMeetingInvitationDisplayed,
  isSpringSocietyMeetingInvitationDisplayed,
} from "../constants/societyMeetingDates";

const IndexPage = () => {
  return (
    <Layout>
      <>
        <h2>Hukan pitäjä</h2>

        <p>
          <span>
            Tervetuloa Hukan keskiaikaiseen pitäjään, eli Keskiaikaseura Hukka ry:n toimintaan. Elävöitämme keskiaikaa
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
            Hukan pitäjä on osa Aarnimetsän paronikuntaa eli Suomen keskiaikaseura ry:tä, joka taas on osa
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
                  sisätiloihin. Kysy näistä puheenjohtajalta lisää!
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

          <MainPageTopicalThings />

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

export const Head: HeadFC = () => <title>Hukan pitäjä</title>;
