import * as React from "react";
import { HeadFC, Link } from "gatsby";
import { Layout } from "../components/layout";
import { ExternalLink } from "../components/external-link";

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
              <Link to="/calendar">Kalenteri-sivulta</Link> löydät kevään aikataulun. Erilaisista aktiviteeteistamme
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
            <h3>Syksyn 2023 toiminta</h3>

            <div>
              <p>
                <span>
                  Syksyn 2023 sunnuntaitapaamiset alkavat pyörimään kunnolla syyskuun alussa, mutta sunnuntaina{" "}
                  <b>20.8.</b> pääsee jo tutustumaan! Tuolloin on uusien ilta, jolloin on mahdollisuus päästä näkemään,
                  hypistelemään ja kokeilemaan kaikenlaista keskiaikaharrastukseen liittyvää kuten vaatteita, astioita,
                  tekstiityöjuttuja, kirjamaalausta, keittokirjoja ja nimi- ja vaakunajuttuja sekä mahdollisesti myös
                  jousiammuntaa.
                </span>
              </p>
              <p>
                <span>
                  Huom. kuitenkin että sitä seuraavana sunnuntaina 27.8. ei ole kokoontumista vaan viikottaiset
                  tapaamiset alkavat 3.9. Tapaamisten ohjelma muodostuu piakkoin.
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Hucan pitäjä</title>;
