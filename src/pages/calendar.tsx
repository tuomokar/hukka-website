import styled from "@emotion/styled";
import { HeadFC, Script } from "gatsby";
import React, { FC, ReactElement, ReactNode } from "react";
import { ExternalLink } from "../components/external-link";
import { Layout } from "../components/layout";

type SundayActivity = {
  date: string;
  title: ReactNode;
  additionalDescription?: string | ReactElement;
  noMeeting?: boolean;
};

// Could move these to somewhere else at some point. Or use Drachenwald calendar.
const sundayActivities: SundayActivity[] = [
  { date: "21.8.", title: "Syyskauden avaus: uusien ilta sekä eri keskiajan vuosisatojen vaatteiden esittelyä" },
  { date: "28.8.", title: "Vapaamuotoisesti käsitöitä sekä apua tarjolla mm. ompeluun ja kaavoittamiseen" },
  { date: "4.9.", title: "Scriptorium: kalligrafiaa ja illuminaatiota" },
  { date: "11.9.", title: "Jousiammuntaa" },
  { date: "18.9.", title: "1500-luvun vaatetyöpaja: Saksa ja Italia" },
  { date: "25.9.", title: "Sinetit: opetusta ja työpaja" },
  { date: "2.10.", title: "Scriptorium: kalligrafiaa ja illuminaatiota" },
  { date: "9.10.", title: "Helmikirjonta: alkeet" },
  {
    date: "16.10.",
    title: (
      <>
        Kasvivärjäys <s>sekä jousiammuntaa</s> (jousiammunta peruttu sairaustapauksen takia)
      </>
    ),
    additionalDescription: (
      <>
        <p>Kasvivärjäys on jatkoa keväällä pidetylle värjäystyöpajalle, mutta vielä ehdit mukaan!</p>
        <p>
          <span>Ilmoita tulostasi etukäteen vaikka voudille.</span>
        </p>
        <p>
          <span>Jotta pääsemme heti toimeen, seuraa näitä ohjeita</span>
        </p>
        <ul>
          <li>
            <span>Varaa mukaan 100g lankaa (100% villaa tai sukkalankaa 75% villa 25% polyamidi)</span>
          </li>
          <li>
            <span>Vyyhditä lankasi valmiiksi 50g vyyhdiksi ja laita myös haltijalanka</span>
          </li>
          <li>
            <span>Laita haltijalankaan teippi ja merkitse siihen oma nimesi</span>
          </li>
          <li>
            <span>
              Kastele vyyhti/vyyhdit liottamalla vedessä tunnin ajan. Puristeltuasi ylimääräiset vedet pois, pakkaa
              vyyhdit muovipussiin, jolla saat kuljetettua ne kosteina.
            </span>
          </li>
        </ul>
        <p>
          <span>
            Jos vyyhditys ei ole tuttua, sen voi tehdä myös paikanpäällä, mutta silloin varaudu siihen, että ehdit
            purettaa vain yhden 50g vyyhdin.
          </span>
        </p>
      </>
    ),
  },
  { date: "23.10.", title: "Helmikirjonta: jatkoa" },
  { date: "30.10.", noMeeting: true, title: "" },
  { date: "6.11.", noMeeting: true, title: "" },
  { date: "13.11.", title: "Scriptorium: kalligrafiaa ja illuminaatiota" },
  { date: "20.11.", title: "Jousiammuntaa" },
  { date: "27.11.", title: "Kaksipuoleinen lautanauha ja brokadilautanauha" },
  { date: "4.12.", noMeeting: true, title: "" },
  { date: "11.12.", title: "Scriptorium: kalligrafiaa ja illuminaatiota" },
  { date: "18.12.", title: "Pikkujoulut" },
];

type Event = {
  title: string;
  date: string;
  description: ReactElement;
};

const events: Event[] = [
  {
    date: "4.-6.11.",
    title: "Kekrijuhla",
    description: (
      <>
        <p>
          <span>
            Hucan pitäjän perinteisesti tuleva Kekrijuhla tulee taas. Tapahtuma on tällä hetkellä täynnä koko
            viikonlopuksi tulijoiden osalta, mutta päiväkävijäksi vielä mahtuu.
          </span>
        </p>
        <p>
          <span>
            Lisätietoa löydät tapahtuman{" "}
            <ExternalLink href="https://kekrijuhla.wordpress.com/">nettisivuilta</ExternalLink>.
          </span>
        </p>
      </>
    ),
  },
  {
    date: "2.-4.12",
    title: "Annanpäivät",
    description: (
      <>
        <p>
          <span>
            Sisarseuramme Poukan (Kotkan Keskiaikaseura) järjestämä tapahtuma Pyhällön Lintukodossa. Ilmoittautuminen
            tapahtumaan avautuu 7.10. klo 18.00. Lisätietoa löydät mm.{" "}
            <ExternalLink href="https://www.facebook.com/groups/149121295016/posts/10159011887470017/">
              Facebookista
            </ExternalLink>
            .
          </span>
        </p>
      </>
    ),
  },
  {
    date: "20.-22.1.2023",
    title: "Talvi-ilta",
    description: (
      <>
        <p>
          <span>
            Sisarseuramme Humalasalon (Hämeen Keskiaika) järjestämä tapahtuma Parkanossa. Ilmoittautuminen tapahtumaan
            avautuu 1.12.2022 klo 18.00. Lisätietoa löydät mm.{" "}
            <ExternalLink href="http://www.talvi-ilta.humalasalo.net/">tapahtuman kotisivuilta</ExternalLink>.
          </span>
        </p>
      </>
    ),
  },
  {
    date: "17.-19.2.2023",
    title: "Sydäntalvenjuhla",
    description: (
      <>
        <p>
          <span>
            Sisarseuramme Unikankareen (Turun keskiaikaseura) järjestämä tapahtuma Taivalsalossa. Ilmoittautuminen
            tapahtumaan avautuu 7.11.2022 klo 20.00. Lisätietoa löydät mm.{" "}
            <ExternalLink href="https://keskiaikaseuraunikankare.fi/sydantalvenjuhla2023">
              tapahtuman kotisivuilta
            </ExternalLink>
            .
          </span>
        </p>
      </>
    ),
  },
  {
    date: "14.-18.6.2023",
    title: "Drachenwaldin 30v juhlat",
    description: (
      <>
        <p>
          <span>
            Euroopan kuningaskunta Drachenwaldin (johon myös Hukka ja Aarnimetsä kuuluu) järjestämä suuri
            juhlatapahtuma. Tapahtuma järjestetään Alankomaissa Kasteel de Berckt - linnan tiloissa. Myös Suomesta on
            lähdössä sinne paljon porukkaa.
          </span>
        </p>
        <p>
          <span>
            Lisätietoa löytyy mm. &nbsp;
            <ExternalLink href="https://drachenwald.sca.org/events/calendar/#/polderslot/2023-06-14/drachenwald-s-30th-year-anniversary-celebration-and-coronation">
              Drachenwaldin kalenterista
            </ExternalLink>
            &nbsp;(tarkemmin tietoa tullee piakkoin). Tapahtumaan lähteviä suomalaisia varten on myös tehty{" "}
            <ExternalLink href="https://www.facebook.com/groups/dw30matkalaiset/">
              oma ryhmänsä Facebookiin
            </ExternalLink>
            .
          </span>
        </p>
      </>
    ),
  },
];

const Calendar: FC = () => (
  <Layout>
    <>
      <h2>Kalenteri</h2>

      <div>
        <h3>Sunnuntaitapaamiset Oulunkylän nuorisotalo Nuotalla</h3>

        <div>
          <p>
            <span>
              Tapaamisissa tehdään joka viikko jotakin keskiaikaan liittyvää jollain tietyllä teemalla. Voit tulla
              mukaan pääosin ilmoittamatta - joissakin saatetaan pyytää ilmoittautuminen etukäteen, että osataan
              varautua tarvittavalla määrällä materiaalia. Tapaamiset ovat sunnuntaisin klo 18.00 alkaen. Opetus on
              pääosin ilmaista, mutta joskus saattaa olla pieniä materiaalimaksuja.
            </span>
          </p>
          <p>
            <span>Nuotan osoite Kylänvanhimmantie 25B. Se on aivan Oulunkylän juna-aseman vieressä.</span>
          </p>
        </div>

        <div>
          <ul>
            {sundayActivities.map(({ date, title, additionalDescription, noMeeting }) => (
              <SundayActivityListItem>
                <>
                  <span>{noMeeting ? <>{date}</> : <b>{date}</b>}</span>&nbsp;
                  <span>{noMeeting ? "(ei tapaamista)" : title}</span>
                  {additionalDescription && (
                    <ul>
                      <li>{additionalDescription}</li>
                    </ul>
                  )}
                </>
              </SundayActivityListItem>
            ))}
          </ul>
        </div>
      </div>

      <EventsContainer>
        <h3>Harrastajien keskiaikatapahtumat</h3>
        <div>
          <p>
            <span>
              Tapahtumissa pukeudutaan keskiaikaisesti. Mukaan tarvitset siis keskiaikavaatteet sekä myös syömävälineet
              (esim. puulautanen ja -lusikka). Mukaan voi tulla kuka vaan (ei tarvitse olla jäsen), kunhan tapahtumiin
              ilmoittautuu etukäteen ja maksaa tapahtumamaksun, joka kattaa mm. ruoat sekä tapahtumapaikan vuokran. Jos
              haluat tulla mukaan, mutta sinulla ei ole valmiiksi tavaroita, niitä löytyy lainaan kyllä tarvittaessa,
              kunhan pyydät etukäteen!
            </span>
          </p>
        </div>
        <div>
          <ul>
            {events.map(({ title, date, description }) => (
              <li>
                <span>
                  <b>{date}</b>
                </span>
                &nbsp;
                <span>{title}</span>
                {description}
              </li>
            ))}
          </ul>
        </div>
      </EventsContainer>

      <div>
        <h3>Taistelutreenit</h3>

        <div>
          Taistelutreenejä on Viikissä joka torstai, yleensä klo 18 alkaen. Lainatavaroita löytyy jonkun verran, joten
          alkuun et tarvitse mitään. Marski voi kertoa tarkan osoitteen (yhteystiedot-sivulta löytyy sähköposti).
        </div>
      </div>
    </>
  </Layout>
);

const SundayActivityListItem = styled.li`
  margin-top: 8px;
`;

const EventsContainer = styled.div`
  35px;
`;

export default Calendar;

export const Head: HeadFC = () => <title>Hucan pitäjä - kalenteri</title>;
