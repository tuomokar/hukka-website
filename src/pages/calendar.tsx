import styled from "@emotion/styled";
import { format, isSameDay, parseISO } from "date-fns";
import { HeadFC } from "gatsby";
import React, { FC, ReactElement } from "react";
import { ExternalLink } from "../components/external-link";
import { Layout } from "../components/layout";
import { SundayActivity } from "../components/SundayActivity";
import { SundayActivity as SundayActivityType } from "../types/Activities";

type YearDigits = `202${3 | 4}`;
type MonthFirstDigit = 0 | 1;
type MonthSecondDigit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type DayFirstDigit = 0 | 1 | 2 | 3;
type DaySecondDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type IsoDateString = `${YearDigits}-${MonthFirstDigit}${MonthSecondDigit}-${DayFirstDigit}${DaySecondDigit}`;

const formatEventDates = (dateStartString: IsoDateString, dateEndString: IsoDateString) => {
  const startDate = parseISO(dateStartString);
  const endDate = parseISO(dateEndString);

  if (isSameDay(startDate, endDate)) {
    return format(startDate, "d.M.yyyy");
  }

  return `${format(startDate, "d.")}-${format(endDate, "d.M.yyyy")}`;
};

// Could move these to somewhere else at some point. Or use Drachenwald calendar.
const sundayActivities: SundayActivityType[] = [
  {
    date: "15.1.",
    title: "Kevätkauden avaus: Lautanauhan perusteet 1/3",
    additionalDescription: (
      <>
        <p>
          <span>
            Ensimmäinen osa lautanauhan perusteista. Lisätietoa kerrasta ja kurssista löydät mm.&nbsp;
            <ExternalLink href="https://www.facebook.com/groups/hukkary/posts/6015361638507687/">
              Facebookista
            </ExternalLink>
          </span>
        </p>
      </>
    ),
  },
  {
    date: "22.1",
    title: "Talvi-ilta-tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "29.1",
    title: "Vapaamuotoisesti omia käsitöitä ja teetä/kahvia. Apua ainakin ompeluun tarjolla myös.",
  },
  {
    date: "5.2.",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "12.2.",
    title: "Jousiammuntaa sekä lautanauhan perusteet 2/3",
    additionalDescription: (
      <>
        <p>
          <span>
            Jousiammunnan lisäksi toinen osa lautanauhan perusteista. Lisätietoa kerrasta ja kurssista löydät mm.&nbsp;
            <ExternalLink href="https://www.facebook.com/groups/hukkary/posts/6015361638507687/">
              Facebookista
            </ExternalLink>
          </span>
        </p>
      </>
    ),
  },
  {
    date: "19.2.",
    title: "Sydäntalvenjuhla-tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "26.2.",
    title: "Neulakinnastekniikka",
  },
  {
    date: "5.3.",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "12.3.",
    title: "Jousiammuntaa sekä lautanauhan perusteet: 3/3",
    additionalDescription: (
      <>
        <p>
          <span>
            Jousiammunnan lisäksi kolmas osa lautanauhan perusteista. Lisätietoa kerrasta ja kurssista löydät mm.&nbsp;
            <ExternalLink href="https://www.facebook.com/groups/hukkary/posts/6015361638507687/">
              Facebookista
            </ExternalLink>
          </span>
        </p>
      </>
    ),
  },
  {
    date: "19.3.",
    title: "(Ohjelma ei päätetty vielä. Tulee piakkoin.)",
  },
  {
    date: "26.3.",
    title: "(Ohjelma ei päätetty vielä. Tulee piakkoin.)",
  },
  {
    date: "2.4.",
    title: "Ave Cecilia II -tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "9.4.",
    title: "Pääsiäinen",
    noMeeting: true,
  },
  {
    date: "16.4.",
    title: "Helmikirjonta 2",
    additionalDescription: (
      <p>
        <span>Jatkoa syksyllä tehdylle helmikirjonnalle</span>
      </p>
    ),
  },
  {
    date: "23.4.",
    title: "Discendo Tota Aetas - Oppia ikä kaikki III -tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "30.4.",
    title: "Vappuaatto",
    noMeeting: true,
  },
  {
    date: "7.5.",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "14.5.",
    title: "Jousiammuntaa",
  },
  {
    date: "21.5.",
    title: "Lankojen kasvivärjäys 3",
    additionalDescription: (
      <p>
        <span>Jatkoa viime keväällä alkaneelle ja syksyllä jatkuneelle värjäykselle.</span>
      </p>
    ),
  },
  {
    date: "28.5.",
    title: "Kevätkauden päätös: Nyyttärit sekä apaamuotoisia käsitöitä.",
  },
];

type Event = {
  title: string;
  dateStart: IsoDateString;
  dateEnd: IsoDateString;
  description: ReactElement;
};

const events: Event[] = [
  {
    dateStart: "2023-01-20",
    dateEnd: "2023-01-22",
    title: "Talvi-ilta",
    description: (
      <>
        <p>
          <span>
            Sisarseuramme Humalasalon (Hämeen Keskiaika) järjestämä tapahtuma Parkanossa. Ilmoittautuminen tapahtumaan
            on auki. Lisätietoa löydät mm.
            <ExternalLink href="http://www.talvi-ilta.humalasalo.net/">tapahtuman kotisivuilta</ExternalLink>.
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2023-01-27",
    dateEnd: "2023-01-29",
    title: "Kuningaskunnan online-yliopisto",
    description: (
      <p>
        <span>
          Kansainvälinen tieteisiin ja taiteisiin keskittyvä online-tapahtuma. Osallistuminen on ilmaista, mutta
          ilmoittautuminen täytyy tehdä etukäteen. Lisätietoa suomeksi löydät mm.&nbsp;
          <ExternalLink href="https://www.facebook.com/groups/149121295016/posts/10159309906920017/">
            Facebookista
          </ExternalLink>
          . Tapahtuman nettisivut löydät&nbsp;
          <ExternalLink href="https://ku-online.drachenwald.sca.org/">täältä (englanniksi)</ExternalLink>. Sieltä löydät
          myös ilmoittautumisohjeet.
        </span>
      </p>
    ),
  },
  {
    dateStart: "2023-02-17",
    dateEnd: "2023-02-19",
    title: "Sydäntalvenjuhla",
    description: (
      <>
        <p>
          <span>
            Sisarseuramme Unikankareen (Turun keskiaikaseura) järjestämä tapahtuma Taivalsalossa. Ilmoittautuminen
            tapahtumaan on auki. Lisätietoa löydät mm.&nbsp;
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
    dateStart: "2023-03-31",
    dateEnd: "2023-04-02",
    title: "Ave Cecilia II",
    description: (
      <p>
        <span>Hucan laulamiseen ja musiikkiin keskittyvä tapahtuma tulee taas! Lisätietoa tulee piakkoin.</span>
      </p>
    ),
  },
  {
    dateStart: "2023-04-21",
    dateEnd: "2023-04-23",
    title: "Discendo Tota Aetas - Oppia ikä kaikki III",
    description: (
      <p>
        27.2.2023 klo 18.00 alkaen
        <span>
          Sisarseuramme Poukan (Kotkan Keskiaikaseura) järjestämä tapahtuma Pyhällön Lintukodossa. Tarkoituksena
          tapahtumassa on oppia uusia asioita. Ilmoittautuminen tapahtumaan avautuu 27.2. klo 18.00. Lisätietoa löydät
          mm.&nbsp;
          <ExternalLink href="https://www.aarnimetsa.org/tapahtumakalenteri/#/aarnimetsa-poukka/2023-04-21/discendo-tota-aetas-iii">
            Aarnimetsän kalenterista
          </ExternalLink>
          .
        </span>
      </p>
    ),
  },
  {
    dateStart: "2023-06-14",
    dateEnd: "2023-06-18",
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
            Lisätietoa löytyy mm.&nbsp;
            <ExternalLink href="https://30year.drachenwald.sca.org/">
              Tapahtuman nettisivuilta (huom. sivusto on englanniksi).
            </ExternalLink>
            &nbsp; Tapahtumaan lähteviä suomalaisia varten on myös tehty&nbsp;
            <ExternalLink href="https://www.facebook.com/groups/dw30matkalaiset/">
              oma ryhmänsä Facebookiin
            </ExternalLink>
            .
          </span>
        </p>
        <p>
          <span>
            Huom. tapahtuman ilmoittautuminen on avautunut jo ja suuri osa sisänukkumapaikoista on mennyt täyteen. Jos
            haluat tapahtumaan mukaan, kannattaa silti ilmoittautua vielä. Sisäpaikkoja saatta olla vielä ja peruutuksia
            varmasti tulee. Toki voi lähteä halutessaan myös teltan kanssa sinne.
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
          <p>
            <span>Kevään ohjelma täydentyy aivan piakkoin. Luvassa on kaikenlaista mielenkiintoista!</span>
          </p>
        </div>

        <div>
          <ul>
            {sundayActivities.map(
              ({
                date,
                title,
                additionalDescription = null,
                noMeeting = false,
                isCanceled = false,
                cancelReason = null,
              }) => (
                <SundayActivityListItem key={date}>
                  <SundayActivity
                    date={date}
                    title={title}
                    additionalDescription={additionalDescription}
                    noMeeting={noMeeting}
                    isCanceled={isCanceled}
                    cancelReason={cancelReason}
                  />
                </SundayActivityListItem>
              )
            )}
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
            {events.map(({ title, dateStart, dateEnd, description }) => (
              <li key={title}>
                <span>
                  <b>{formatEventDates(dateStart, dateEnd)}</b>
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
  margin-top: 35px;
`;

export default Calendar;

export const Head: HeadFC = () => <title>Hucan pitäjä - kalenteri</title>;
