import styled from "@emotion/styled";
import { HeadFC } from "gatsby";
import React, { FC, ReactElement } from "react";
import { ExternalLink } from "../components/external-link";
import { Layout } from "../components/layout";
import { SundayActivity } from "../components/SundayActivity";
import { SundayActivity as SundayActivityType } from "../types/Activities";

// Could move these to somewhere else at some point. Or use Drachenwald calendar.
const sundayActivities: SundayActivityType[] = [
  {
    date: "15.1.",
    title: "Kevätkauden avaus: Lautanauhan perusteet",
  },
];

type Event = {
  title: string;
  date: string;
  description: ReactElement;
};

const events: Event[] = [
  {
    date: "20.-22.1.2023",
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
    date: "17.-19.2.2023",
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
    date: "31.3. - 2.4.2023",
    title: "Ave Cecilia II",
    description: (
      <p>
        <span>Hucan laulamiseen ja musiikkiin keskittyvä tapahtuma tulee taas! Lisätietoa tulee piakkoin.</span>
      </p>
    ),
  },
  {
    date: "21. - 23.4.2023",
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
            {events.map(({ title, date, description }) => (
              <li key={date}>
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
  margin-top: 35px;
`;

export default Calendar;

export const Head: HeadFC = () => <title>Hucan pitäjä - kalenteri</title>;
