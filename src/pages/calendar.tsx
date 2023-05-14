import styled from "@emotion/styled";
import { isFuture, isToday, parseISO } from "date-fns";
import { IsoDateString } from "dates/types";
import { formatDateRange } from "dates/utils";
import { HeadFC } from "gatsby";
import React, { FC, ReactElement } from "react";
import { ExternalLink } from "../components/external-link";
import { Layout } from "../components/layout";
import { SundayActivity } from "../components/SundayActivity";
import { SundayActivity as SundayActivityType } from "../types/Activities";

// Could move these to somewhere else at some point. Or use Drachenwald calendar.
const sundayActivities: SundayActivityType[] = [
  {
    date: "2023-01-15",
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
    date: "2023-01-22",
    title: "Talvi-ilta-tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2023-01-29",
    title: "Vapaamuotoisesti omia käsitöitä ja teetä/kahvia. Apua ainakin ompeluun tarjolla myös.",
  },
  {
    date: "2023-02-05",
    title: (
      <>
        Skriptorium: illuminaatiota ja kalligrafiaa sekä <s>keskiaika- ja renessanssilaulujen laulamista</s>
      </>
    ),
    additionalDescription: (
      <>(Valitettavasti laulu on peruttu tältä erää, mutta skriptorium on. Laulua on sitten taas maaliskuussa.)</>
    ),
  },
  {
    date: "2023-02-12",
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
    date: "2023-02-19",
    title: "Sydäntalvenjuhla-tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2023-02-26",
    title: "Neulakinnastekniikka",
  },
  {
    date: "2023-03-05",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "2023-03-12",
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
    date: "2023-03-19",
    title: "Lisää lautanauhatekniikoita sekä keskiaika- ja renessanssilaulujen laulamista",
    additionalDescription: (
      <p>Mestari Johanna kertoo vielä lisää lautanauhojen tekemisestä. Salissa lisäksi laulamista.</p>
    ),
  },
  {
    date: "2023-03-26",
    title: "Tanssi",
  },
  {
    date: "2023-04-02",
    title: "Ave Cecilia II -tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2023-04-09",
    title: "Pääsiäinen",
    noMeeting: true,
  },
  {
    date: "2023-04-16",
    title: "Helmikirjonta 2",
    additionalDescription: (
      <p>
        <span>Jatkoa syksyllä tehdylle helmikirjonnalle</span>
      </p>
    ),
  },
  {
    date: "2023-04-23",
    title: "Discendo Tota Aetas - Oppia ikä kaikki III -tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2023-04-30",
    title: "Vappuaatto",
    noMeeting: true,
  },
  {
    date: "2023-05-07",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "2023-05-14",
    title: "Jousiammuntaa",
  },
  {
    date: "2023-05-21",
    title: "Lankojen kasvivärjäys 3",
    additionalDescription: (
      <p>
        <span>
          Jatkoa viime keväällä alkaneelle ja syksyllä jatkuneelle värjäykselle. Vielä ehdit mukaan, vaikket olisi
          osallistunutkaan edelliselle kerralle. Lisätietoa löydät{" "}
          <ExternalLink href="https://www.facebook.com/groups/hukkary/posts/6269582356418946/">
            Facebookista
          </ExternalLink>
        </span>
      </p>
    ),
  },
  {
    date: "2023-05-28",
    title: "Kevätkauden päätös: Nyyttärit sekä vapaamuotoisia käsitöitä.",
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
        <span>
          Hucan laulamiseen ja musiikkiin keskittyvä tapahtuma tulee taas! Ilmoittautuminen on nyt auki. Lisätietoa
          löydät tapahtuman&nbsp;
          <ExternalLink href="https://avececilia.wordpress.com/">tapahtuman nettisivuilta</ExternalLink>.
        </span>
      </p>
    ),
  },
  {
    dateStart: "2023-04-21",
    dateEnd: "2023-04-23",
    title: "Discendo Tota Aetas - Oppia ikä kaikki III",
    description: (
      <p>
        <span>
          Sisarseuramme Poukan (Kotkan Keskiaikaseura) järjestämä tapahtuma Pyhällön Lintukodossa. Tarkoituksena
          tapahtumassa on oppia uusia asioita. Ilmoittautuminen tapahtumaan avautuu 27.2. klo 18.00. Lisätietoa löydät
          &nbsp;
          <ExternalLink href="https://sites.google.com/site/kotkankeskiaikaseurapoukka/toimintaa-poukassa/discendo-tota-aetas-oppia-ik%C3%A4-kaikki">
            tapahtuman nettisivuilta
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
      </>
    ),
  },
  {
    dateStart: "2023-07-14",
    dateEnd: "2023-07-23",
    title: "Nuijasota",
    description: (
      <>
        <p>
          <span>
            Perinteinen koko Aarnimetsän paronikunnan kesäinen telttaleiritapahtuma tulee taas. Tapahtumassa harrastajat
            kokoontuvat telttailemaan keskiaikaisessa hengessä reilun viikon ajaksi. Suurella osalla majoittujista on
            keskiaikainen teltta mutta myös sisämajoituksessa on tilaa ja majoittua voi myös mundaaniteltalla. Ei ole
            myöskään pakko tulla koko viikoksi, vaan voi tulla esim. päiväkäynnille tai muutamaksi päiväksi.
          </span>
        </p>
        <p>
          <span>
            Tapahtumassa on joka päivä monenlaista toimintaa, kuten erilaisten käsitöiden opetusta, luentoja, taistelua,
            tanssia, jousiammuntaa. Sauna ja järvi ovat myös suosittuja! Tapahtumassa on kahdet pidot. Nopeasti
            ilmoittautuville on päivisin ruokaa tarjolla aamupala, lounas sekä päivällinen, mutta ruokaa voi tehdä myös
            itse paikanpäällä.
          </span>
        </p>
        <p>
          <span>
            Tapahtuman ilmoittautuminen on auki. Linkki ilmoittautumiseen ja lisätietoa tapahtumasta löytyy sen
            nettisivuilta.&nbsp;
            <ExternalLink href="https://cudgelwar.wordpress.com/">oma ryhmänsä Facebookiin</ExternalLink>
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2023-08-25",
    dateEnd: "2023-08-27",
    title: "Aarnimetsän paronillinen nvestituura",
    description: (
      <>
        <p>
          <span>
            Investituurassa Aarnimetsä saa uudet paronilliset seuraavalle kahdelle vuodelle. Tapahtuma tulee olemaan
            Kiljavan leirikeskuksessa Hyvinkäällä.
          </span>
        </p>
        <p>
          <span>Lisätietoa tapahtumasta tulee piakkoin.</span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2023-09-15",
    dateEnd: "2023-09-17",
    title: "Syysrieha",
    description: (
      <>
        <p>
          <span>
            Pieni mutta lämminhenkinen sisarseuramme Unikankareen tapahtuma Vienolan leirikeskuksessa Rymättylässä
            15.-17.9.2023.
          </span>
          <p>
            <span>
              Lisätietoa löytyy esim.{" "}
              <ExternalLink href="https://www.aarnimetsa.org/tapahtumakalenteri/#/aarnimetsa-unikankare/2023-09-15/syysrieha">
                Aarnimetsän kalenterista
              </ExternalLink>
              .
            </span>
          </p>
        </p>
      </>
    ),
  },
  {
    dateStart: "2023-10-13",
    dateEnd: "2023-10-15",
    title: "Kruununturnajaiset",
    description: (
      <>
        <p>
          <span>
            Kuningaskuntamme kruununturnajaiset, joissa mitellään siitä, kuka hallitsee Drachenwaldia seuraavat puoli
            vuotta. Tapahtumassa on luonnollisesti paljon ohjelmaa myös muille kuin taistelijoille!
          </span>
          <p>
            <span>
              Lisätietoa löytyy{" "}
              <ExternalLink href="https://keskiaikaseuraunikankare.fi/autumn-crown-tournament/">
                tapahtuman nettisivuilta
              </ExternalLink>
              .
            </span>
          </p>
        </p>
      </>
    ),
  },
  {
    dateStart: "2023-10-22",
    dateEnd: "2023-10-23",
    title: "Kekrijuhla",
    description: (
      <>
        <p>
          <span>Hukan oma perinteinen syksyn tapahtuma, jossa ohjelmaa jokaiselle. Lisätietoa tulee myöhemmin.</span>
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
            {events
              .filter(({ dateEnd: dateEndString }) =>
                ((dateEnd: Date) => isToday(dateEnd) || isFuture(dateEnd))(parseISO(dateEndString))
              )
              .map(({ title, dateStart, dateEnd, description }) => (
                <li key={title}>
                  <span>
                    <b>{formatDateRange(dateStart, dateEnd)}</b>
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
          Taistelutreenejä on pääsääntöisesti joka torstai, yleensä klo 18 alkaen. Lainatavaroita löytyy jonkun verran,
          kunhan kerrot etukäteen että olisit kiinnostunut tulemaan. Alkuun et tarvitse itse mitään. Marski ja/tai vouti
          voi kertoa tarkan osoitteen (yhteystiedot-sivulta löytyy sähköposti).
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
