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
    date: "2024-08-18",
    title: "Käsitöiden tekoa",
    additionalDescription: (
      <span>
        Syyskauden alku. Tehdään omia vapaamuotoisia käsitöitä, joten jos sinulla on mikään keskeneräinen käsityö, ota
        se mukaan ja tule tekemään sitä kanssamme! Jos olet uusi, saa tietysti tulla myös tutustumaan ja kyselemään.
      </span>
    ),
  },
  {
    date: "2024-08-25",
    title: "Uusien ilta",
    additionalDescription: (
      <span>
        Mukaan toimintaamme saa tulla milloin vain, mutta tämä on erityisesti sinulle, joka olet mahdollisesti
        kiinnostunut toiminnastamme ja/tai keskiajan elävöittämisestä! Tule rohkeasti mukaan tutustumaan!
      </span>
    ),
  },
  {
    date: "2024-09-01",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "2024-09-08",
    title: "Sisarseuramme Kaarnemaan järjestämä taisteluleiri-tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2024-09-15",
    title: "Jousiammuntaa liikuntasalissa",
  },
  {
    date: "2024-09-22",
    title: "Museovierailu Sinebrychoffilla",
    additionalDescription: (
      <span>
        Huom. tällöin ei olla Nuotalla ollenkaan. Lisätietoa löydät{" "}
        <ExternalLink href="https://www.facebook.com/events/878264680880693">Facebookista</ExternalLink> (sivun pitäisi
        avautua myös vaikka sinulla ei ole Facebook-tiliä). Jos et ole Facebookissa, voit ilmoittautua esim.
        sähköpostilla suoraan tiede- ja taideneuvokselle (moas (at) hucca.org).
      </span>
    ),
  },
  {
    date: "2024-09-29",
    title: "Sudennälkä keittiössä",
    additionalDescription: (
      <span>
        ( Jos olet kiinnostunut keskiajan ruoasta niin nyt on oiva mahdollisuus tutustua siihen. Sunnuntaina pääsee
        opastuksella valmistamaan ruokaa sekä lopuksi maistelemaan sitä. Kustannukset jaetaan osallistujien kesken ja
        maksaa voi opettajalle Mobilepayllä.
        <br />
        <br />
        Jotta opettaja osaa varata oikean määrä aineksia sekä suunnitella valmistettavat tuotteet, on
        etukäteisilmoittautuminen perjantaihin 27.9. klo: 18.00 saakka ilmoittamalla tiede- ja taideneuvoksellemme
        sähköpostilla moas (at) hucca.org. Ilmoittautuessa kerro ruokavaliosi (seka/kasvis) ja mahdolliset allergiat.
        <br />
        <br />
        Nämä otetaan huomioon mahdollisuuksien mukaan. Otathan kuitenkin huomioon, että jos omaat hyvin rajoitetun
        ruokavalion voi olla ettei sitä pystytä täysin noudattamaan. Tämä ei ole este osallistua, mutta voi rajoittaa
        mahdollisuutta maistella tuotoksia.
        <br />
        <br />
        Ilmoittauduthan mukaan VAIN jos olet tulossa jotta opettaja ei turhaan hanki materiaaleja. Ilmoittautumattakin
        voi tulla mukaan, mutta etusijalla ovat ne jotka ovat ilmoittaneet osallistumisestaan. Sohville voi toki myös
        tulla ihan vain kuuntemaan ja tekemään omia käsitöitä. Aloitus tutusti klo 18.00. Olethan ajoissa, sillä aikaa
        on rajoitetusti. )
      </span>
    ),
  },
  {
    date: "2024-10-06",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "2024-10-13",
    title: "Jousiammuntaa liikuntasalissa",
  },
  {
    date: "2024-10-20",
    title: "Nuotta syyslomalla",
    noMeeting: true,
  },
  {
    date: "2024-10-27",
    title: "Alusmekon tai -paidan tekoa",
  },
  {
    date: "2024-11-03",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "2024-11-10",
    title: "Hukan oma Kekrijuhla-tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2024-11-17",
    title: "Lautanauha osa 1",
  },
  {
    date: "2024-11-24",
    title: "Lautanauha: osa 2",
    additionalDescription: (
      <span>HUOM. Tämän kerran paikka ja aika saattaa vielä vaihtua jonnekin muualle kuin Nuotalle</span>
    ),
  },
  {
    date: "2024-12-01",
    title: "Skriptorium: illuminaatiota ja kalligrafiaa",
  },
  {
    date: "2024-12-08",
    title: "Sisarseuramme Poukan järjestämä Annanpäivät-tapahtuma viikonloppuna",
    noMeeting: true,
  },
  {
    date: "2024-12-15",
    title: "Pikkujoulut",
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
            käsitöiden sekä erilaisten taistelutaitojen harrastamisen parissa. Ilmoittautuminen alkaa maanantaina 16.9.
            klo 18.00. Lisätietoa löytyy{" "}
            <ExternalLink href="https://kekrijuhla.wordpress.com/">tapahtuman nettisivuilta</ExternalLink>
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
              pääosin ilmaista, mutta joskus saattaa olla pieniä materiaalimaksuja. Olemme tapaamisissa pääsääntöisesti
              ihan arkivaatteissa.
            </span>
          </p>
          <p>
            <span>Nuotan osoite Kylänvanhimmantie 25B. Se on aivan Oulunkylän juna-aseman vieressä.</span>
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
              ),
            )}
          </ul>
        </div>
      </div>

      {/* 
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
       */}

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
                ((dateEnd) => isToday(dateEnd) || isFuture(dateEnd))(parseISO(dateEndString)),
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
              Taistelutreenit pidetään syys- ja kevätkauden aikana{" "}
              <ExternalLink href="https://helsinkimedievalcombat.com/">Helsinki Medieval Combat ry:n </ExternalLink>
              (eli buhurttiharrastajien) tiloissa Helsingin Viikissä (HMC:n nettisivuilta löytyy tarkka osoite). Siellä
              ensimmäinen treenikerta on ilmainen, mutta sen jälkeen voi maksaa joko erittäin kohtuullisen
              kuukausittaisen treenimaksun tai kertamaksun jos käy satunnaisesti. Samalla treenimaksulla voi myös käydä
              buhurttiharrastajien treeneissä.
            </span>
            <span>
              Kesäisin yleensä treenaamme ulkona Kannelmäessä, useimmiten{" "}
              <ExternalLink href="https://maps.app.goo.gl/gQ4brG9vrzqYAs2P9">Pasuunapuistossa</ExternalLink>
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
