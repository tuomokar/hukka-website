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

          <div>
            <h3>Kutsu syyskokoukseen</h3>

            <div>
              <p>
                <span>
                  Taas on se aika vuodesta, kun pitäisi päättää ensi vuodelle hallitus ja virkailijat sekä päättää, mitä
                  Hukka tekee ensi vuonna. Tule yhdistyksen syyskokoukseen sunnuntaina 3.12.2023 klo 18.30. Illalla on
                  skriptorium, joten voit samalla kokoukseen osallistuessa maalailla tai kirjoitella.
                </span>
              </p>

              <div>
                <p>
                  <span>Kokouksessa käsitellään seuraavat asiat:</span>
                </p>
                <ul>
                  <li>
                    Toimintasuunnitelman, tulo- ja menoarvion sekä liittymis- ja jäsenmaksun suuruuden vahvistaminen
                  </li>
                  <li>Hallituksen puheenjohtajan ja muiden jäsenten sekä virkailijoiden valinta</li>
                  <li>Yhden tai kahden toiminnantarkastajan ja heidän varahenkilöiden valinta</li>
                </ul>
              </div>
              <p>
                <span>
                  Kokouksessa äänivaltaisia ovat kaikki Keskiaikaseura Hukka ry:n jäsenet, mutta läsnäolo- ja puheoikeus
                  on kaikilla asiasta kiinnostuneilla, eli rohkeasti mukaan kaikki!
                </span>
              </p>
              <p>
                <span>Kokous pidetään Nuotalla, eli osoite on tuttu Kylänvanhimmantie 25 B, 00640 Helsinki</span>
              </p>
            </div>
          </div>

          <div>
            <h3>Virkailijahaku auki vuodelle 2024</h3>

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
                    <li key={role.scaName ?? role.mundaneName}>
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
                    Toiminnantarkastus on tärkeä mutta aika helppo virka. Kevään 2025 aikana toiminnantarkastaja
                    tarkastaa yhdistyksen tilit sekä toiminnan edeltävältä vuodelta (2023) ja antaa lausunnon niistä
                    kevätkokoukselle. Pääsääntöisesti Hukan toiminta on sen verran pienimuotoista, että siinä ei ole
                    ihan hirveästi syynättävää.
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <b>Laita vapaamuotoinen hakemus voudille</b> (vouti at hucca.org) viimeistään lauantaina 2.12.2023.
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h4>Tässä virkojen kuvaukset</h4>
              <div>
                {officerRoles.map((officerRole) => (
                  <div key={officerRole.scaName ?? officerRole.mundaneName}>
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
