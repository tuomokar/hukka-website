import * as React from "react";
import { HeadFC, Link } from "gatsby";
import { Layout } from "../components/layout";
import { ExternalLink } from "../components/external-link";
import { getOfficerRoleName, officerRoles } from "../constants/officers";

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
                  Viikottaisia taistelutreenejä Viikissä torstaisin (rottinkitaistelu, eli SCA heavy fighting). Kysy
                  näistä marskilta lisää!
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
            <h3>Virkailijahaku auki vuodelle 2023</h3>

            <div>
              <div>
                <p>
                  <span>
                    Haluaisitko olla vaikuttamassa Hukan toimintaan? Olisiko sinulla intoa tehdä jotakin Hukan hyväksi?
                    Hukka on yhdistys ja virkailijaksi/hallitukseen tuleminen on yksi helppo tapa auttaa meitä. Aiempaa
                    kokemusta yhdistystyöstä et tarvitse. Toiminta on meillä varsin rentoa ja voit osallistua sen
                    verran, mikä tuntuu hyvältä.
                  </span>
                </p>
              </div>

              <div>
                <p>
                  <span>Haettavana olisi seuraavat virat:</span>
                </p>
                <ul>
                  {officerRoles.map((role) => (
                    <li key={role.email}>
                      <span>{getOfficerRoleName(role)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p>
                  <span>
                    Voit tulla myös hallitukseen, vaikka sinulla ei olisikaan kiinnostusta mihinkään tiettyyn virkaan.
                    Erityisesti uudehkot harrastajat olisivat erittäin toivottuja tuoreen näkökulman vuoksi!
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span>
                    Lisäksi on haussa myös yksi tai kaksi toiminnantarkastajaa sekä varahenkilöt näille.
                    Toiminnantarkastus on tärkeä mutta aika helppo virka. Kevään 2024 aikana toiminnantarkastaja
                    tarkastaa yhdistyksen tilit sekä toiminnan edeltävältä vuodelta (2023) ja antaa lausunnon niistä
                    kevätkokoukselle. Pääsääntöisesti Hukan toiminta on sen verran pienimuotoista, että siinä ei ole
                    ihan hirveästi syynättävää.
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <b>Laita vapaamuotoinen hakemus voudille</b> (vouti at hucca.org) viimeistään perjantaina 16.12.2022
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h4>Tässä virkojen kuvaukset</h4>
              <div>
                {officerRoles.map((officerRole) => (
                  <div key={officerRole.email}>
                    <h5>{getOfficerRoleName(officerRole)}</h5>
                    <p>
                      <span>{officerRole.description}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Hucan pitäjä</title>;
