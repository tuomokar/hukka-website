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
    date: "2024-01-14",
    title: "Käsitöiden tekoa",
  },
  {
    date: "2024-01-21",
    title: "Paronillisen lahjakorin täyttämistä",
  },
  {
    date: "2024-01-28",
    title: "Kynttiläpaja (pikkujouluista siirtynyt)",
  },
  {
    date: "2024-02-04",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "2024-02-11",
    title: "Jousiammuntaa",
  },
  {
    date: "2024-02-18",
    title: "Sisarseuramme Unikankareen Sydäntalvenjuhla viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2024-02-25",
    title: "hiihtoloma",
    noMeeting: true,
  },
  {
    date: "2024-03-03",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "2024-03-10",
    title: "Sisarseuramme Poukan järjestämä Skriptorium-tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2024-03-17",
    title: "Kirjansidontaa: koptisidos",
  },
  {
    date: "2024-03-24",
    title: "Laulua ja musisointia",
  },
  {
    date: "2024-03-31",
    title: "Pääsiäinen",
    noMeeting: true,
  },
  {
    date: "2024-04-07",
    title: "Scriptorium",
  },
  {
    date: "2024-04-14",
    title: "Jousiammuntaa",
  },
  {
    date: "2024-04-21",
    title: "Sisarseuramme Miehonlinnan järjestämä Suwiyöt-tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2024-04-28",
    title: "Hukan kevättanssiaiset",
  },
  {
    date: "2024-05-05",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "2024-05-12",
    title: "Jousiammuntaa",
  },
  {
    date: "2024-05-19",
    title: "Hukan oma Värttinä & Väripata -tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2024-05-26",
    title: "Vapaamuotoista ompelua. Kaavoitusapua tarjolla",
    additionalDescription: (
      <>
        <span>Myös uudet erittäin tervetulleita!</span>
      </>
    ),
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
            Tapahtuman ilmoittautuminen on auki. Linkki ilmoittautumiseen ja lisätietoa tapahtumasta&nbsp;
            <ExternalLink href="https://cudgelwar.wordpress.com/">löytyy sen nettisivuilta</ExternalLink>
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2023-08-25",
    dateEnd: "2023-08-27",
    title: "Aarnimetsän paronillinen investituura",
    description: (
      <>
        <p>
          <span>
            Investituurassa Aarnimetsä saa uudet paronilliset seuraavalle kahdelle vuodelle. Tapahtuma tulee olemaan
            Kiljavan leirikeskuksessa Hyvinkäällä.
          </span>
        </p>
        <p>
          <span>
            Lisätietoa tapahtumasta löytyy{" "}
            <ExternalLink href="https://aarnimetsainvestiture.wordpress.com/">tapahtuman nettisivuilta</ExternalLink>
          </span>
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
    dateStart: "2023-10-20",
    dateEnd: "2023-10-22",
    title: "Kekrijuhla",
    description: (
      <>
        <p>
          <span>
            Hukan oma perinteinen syksyn tapahtuma, jossa ohjelmaa jokaiselle. Lisätietoa löytyy{" "}
            <ExternalLink href="https://kekrijuhla.wordpress.com/">tapahtuman nettisivuilta</ExternalLink>
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2023-12-08",
    dateEnd: "2023-12-10",
    title: "Annanpäivät",
    description: (
      <>
        <p>
          <span>
            Sisarseuramme Poukan (Kotkan keskiaikaseura) järjestämä tapahtuma Lintukodon leirikeskuksessa Pyhällössä.
          </span>
        </p>
        <p>
          <span>
            Lisätietoa löytyy&nbsp;
            <ExternalLink href="https://sites.google.com/site/kotkankeskiaikaseurapoukka/toimintaa-poukassa/annanp%C3%A4iv%C3%A4t">
              tapahtuman nettisivuilta
            </ExternalLink>
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2024-01-05",
    dateEnd: "2024-01-07",
    title: "Humalasalon Talvi-ilta",
    description: (
      <>
        <p>
          <span>Sisarseuramme Humalasalon (Hämeen keskiaikaseura) järjestämä tapahtuma Ylöjärvellä.</span>
        </p>
        <p>
          <span>
            Ilmoittautuminen alkaa maanantaina 13.11.2023 klo 18. Lisätietoa tapahtumasta{" "}
            <ExternalLink href="https://www.talvi-ilta.humalasalo.net/">sen nettisivuilta</ExternalLink>.
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2024-02-16",
    dateEnd: "2024-01-18",
    title: "Sydäntalvenjuhla",
    description: (
      <>
        <p>
          <span>Sisarseuramme Unikankareen (Turun keskiaikaseura) järjestämä tapahtuma Taivassalossa.</span>
        </p>
        <p>
          <span>
            Tapahtuma on tällä hetkellä täynnä viikonlopuksi tulijoiden osalta, mutta päiväkäynnille mahtuu ja jonoon
            voi toki ilmoittautua, jos haluaa yrittää koko viikonlopuksi.
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2024-03-08",
    dateEnd: "2024-03-10",
    title: "Aarniskriptorium",
    description: (
      <>
        <p>
          <span>Sisarseuramme Poukan (Kotkan keskiaikaseura) järjestämä tapahtuma Pyhtäällä.</span>
        </p>
        <p>
          <span>Lisätietoa tapahtumasta tulee piakkoin.</span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2024-04-19",
    dateEnd: "2024-04-21",
    title: "Suwiyöt",
    description: (
      <>
        <p>
          <span>
            Sisarseuramme Miehonlinnan (Kouvolan keskiaikaseura) järjestämä tapahtuma{" "}
            <s>Lintukodin leirikeskus Pyhällössä</s> Märkiön leirikeskuksessa Nurmijärvellä (eli paikka siirtyi Hukan
            maille)
          </span>
        </p>
        <p>
          <span>
            Tapahtuma lienee tässä vaiheessa täynnä, mutta päiväkävijäksi mahtunee vielä (ja jos haluaa viikonlopuksi,
            kannattaa tietysti kysyä että sattuisiko mahtumaan).
          </span>
        </p>
        <p>
          <span>
            Lisätietoa tapahtumasta{" "}
            <ExternalLink href="https://miehonlinna.wordpress.com/2024/01/07/suwiyot-xxiv-summer-night/">
              sen nettisivuilta
            </ExternalLink>
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2024-05-17",
    dateEnd: "2024-05-19",
    title: "Valpurin tanssiaiset",
    description: (
      <>
        <p>
          <span>Sisarseuramme Unikankareen (Turun keskiaikaseura) järjestämä tapahtuma.</span>
        </p>
        <p>
          <span>
            Lisätietoa tapahtumasta löytyy sen{" "}
            <ExternalLink href="https://keskiaikaseuraunikankare.fi/valpuri2024/">sen nettisivuilta</ExternalLink>.
          </span>
        </p>
        <p>
          <span>
            Huom. valitettavasti tosiaan tapahtuma on samaan aikaan Hukan oman tapahtuman kanssa. Voit valita
            kiinnostaako tanssi vai värjääminen ja värttinä enemmän.
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2024-05-17",
    dateEnd: "2024-05-19",
    title: "Värttinä & Väripata",
    description: (
      <>
        <p>
          <span>Hukan oma rento tapahtuma keskittyen värttinään ja kasvivärjäykseen.</span>
        </p>
        <p>
          <span>
            Lisätietoa tapahtumasta löytyy{" "}
            <ExternalLink href="https://www.hukka.org/events/varttina-varipata/">sen nettisivuilta</ExternalLink>.
          </span>
        </p>
        <p>
          <span>
            Huom. valitettavasti tosiaan tapahtuma on samaan aikaan sisarseuramme Unikankareen tapahtuman kanssa. Voit
            valita kiinnostaako tanssi vai värjääminen ja värttinä enemmän.
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2024-07-05",
    dateEnd: "2024-07-14",
    title: "Nuijasota",
    description: (
      <>
        <p>
          <span>
            Aarnimetsän kesäinen telttaleiritapahtuma tulee taas. Luvassa paljon käsitöitä, taistelua, tanssia,
            syömistä, saunomista, järvessä oleskelua yms. Nukkumapaikkoja on myös sisätiloissa jonkun verran.
          </span>
        </p>
        <p>
          <span>
            Lisätietoa tulee löytyy{" "}
            <ExternalLink href="https://cudgelwar.wordpress.com/">tapahtuman nettisivuilta</ExternalLink>.
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2024-09-06",
    dateEnd: "2024-09-08",
    title: "Taistelulajien treenileiri",
    description: (
      <>
        <p>
          <span>
            Rottinkitaistelua, kalpamiekkailua sekä jousiammuntaa Kangaslahden leirikeskuksessa Jyväskylän lähellä
            sisarseuramme Kaarnemaan järjestämänä.
          </span>
        </p>
        <p>
          <span>
            Lisätietoa tulee löytyy{" "}
            <ExternalLink href="https://www.facebook.com/events/965436178299269">Facebookista</ExternalLink>.
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2024-11-08",
    dateEnd: "2024-11-10",
    title: "Kekrijuhla",
    description: (
      <>
        <p>
          <span>
            Hukan oma Kekrijuhla-tapahtuma Tuusulan Metsäpirtillä. Luvassa rento viikonloppu hyvän ruoan, saunomisen,
            käsitöiden sekä erilaisten taistelutaitojen harrastamisen parissa. Lisätietoa tulee piakkoin.
          </span>
        </p>
      </>
    ),
  },
  {
    dateStart: "2024-12-05",
    dateEnd: "2024-12-08",
    title: "Annanpäivät",
    description: (
      <>
        <p>
          <span>
            Sisarseuramme Poukan järjestämä tapahtuma Pyhällön Lintukodossa. Lisätietoa tulee alkusyksyn aikana.
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
            <span>
              Kevään ohjelma ehti jo mennä, mutta tässä vielä näkyvillä se, mitä kaikkea teimme kevään aikana.
            </span>
          </p>
          <p>
            <span>Syksylle tulee sitten oma ohjelmansa ennen syyskauden alkua elokuussa.</span>
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
        <h3>Muuta</h3>
        <div>
          <p>
            <span>
              <SundayActivity
                date={"2024-08-10"}
                title={"Helsingan keskiaikapäivä"}
                additionalDescription={
                  <span>
                    Osallistumme Helsingan keskiaikapäivään! Elävöitämme tapahtumassa keskiaikaa, teemme käsitöitä,
                    mahdollisesti taistelemme sekä tietysti esittelemme seuramme toimintaa. Tule mukaan tai edes
                    moikkaamaan!
                  </span>
                }
                noMeeting={false}
                isCanceled={false}
                cancelReason={null}
              />
            </span>
          </p>
        </div>
      </EventsContainer>

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
                ((dateEnd) => isToday(dateEnd) || isFuture(dateEnd))(parseISO(dateEndString))
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
          <p>
            <span>
              Taistelutreenejä on pääsääntöisesti joka torstai klo 18 alkaen. Lainatavaroita löytyy jonkun verran,
              kunhan kerrot etukäteen esim. voudille ja/tai marskille että olisit kiinnostunut tulemaan (kannattaa
              kertoa myös siltä kannalta, että joskus voi olla, että treenit peruuntuvat syystä tai toisesta). Alkuun et
              tarvitse itse mitään muuta kuin kevyet pitkähihaiset vaatteet, jotka saavat hikeentyä.
            </span>
          </p>
          <p>
            <span>
              Taistelutreenit pidetään kesän ajan Kannelmäessä. Syksyllä siirrymme sisätiloihin Viikkiin{" "}
              <ExternalLink href="https://helsinkimedievalcombat.com/">Helsinki Medieval Combat ry:n </ExternalLink>
              (eli buhurttiharrastajien) tiloihin Helsingin Viikissä (HMC:n nettisivuilta löytyy tarkka osoite). Siellä
              ensimmäinen treenikerta on ilmainen, mutta sen jälkeen voi maksaa joko erittäin kohtuullisen
              kuukausittaisen treenimaksun tai kertamaksun jos käy satunnaisesti. Samalla treenimaksulla voi myös käydä
              buhurttiharrastajien treeneissä. Kesän ajan ulkotreeneissä ei ole treenimaksuja.
            </span>
          </p>
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
