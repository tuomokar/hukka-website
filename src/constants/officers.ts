type Officer = {
  mundaneName: string;
  scaName: string;
  role: OfficerRole;
};

type OfficerRoleNameOption1 = {
  scaName: string;
  mundaneName: null;
};
type OfficerRoleNameOption2 = {
  scaName: null;
  mundaneName: string;
};
type OfficerRoleNameOption3 = {
  scaName: string;
  mundaneName: string;
};
type OfficerRole = {
  emailStart: string;
  description: string;
} & (OfficerRoleNameOption1 | OfficerRoleNameOption2 | OfficerRoleNameOption3);

const senechalRole: OfficerRole = {
  scaName: "Vouti",
  mundaneName: "puheenjohtaja",
  emailStart: "vouti",
  description:
    "Vouti on yhdistyksen puheenjohtaja. Hän edustaa Hukkaa toisaalta viranomaisiin ja toisaalta " +
    "paronikuntaan ja kuningaskuntaan. Vouti myös hoitaa kaikki ne tehtävät, jotka eivät kuulu " +
    "muille virkailijoille. Puheenjohtaja on luonnollisesti hallituksen jäsen.",
};

const viceSenechalRole: OfficerRole = {
  scaName: "Varavouti",
  mundaneName: "varapuheenjohtaja",
  emailStart: "vouti",
  description: "Varavouti toimii voudin apuna ja tarvittaessa sijaistaa voutia.",
};
const chastellainRole: OfficerRole = {
  scaName: "Kastellaani",
  mundaneName: "usien jäsenten vastaava",
  emailStart: "kastellaani",
  description:
    "Kastellaani opastaa uusia jäseniä. Virka voi olla helpompi jos on harrastanut jo muutaman vuoden " +
    "jotta voi helpommin antaa uusille kiinnostuneille vinkkejä siitä, keneltä kannattaa mitäkin kysyä. Toisaalta " +
    "vähemmänkin harrastanut voi pärjätä roolissa varsin hyvin tuoreemmalla näkökulmalla harrastuksesta. Apua myös " +
    "tietysti saa aina. Kastellaani voi olla joko hallituksen jäsen tai toimihenkilö.",
};
const treasurerRole: OfficerRole = {
  scaName: null,
  mundaneName: "Rahastonhoitaja",
  emailStart: "rahainvartija",
  description:
    "Rahainvartijan pääasiallinen tehtävä on hoitaa Hukan talousasioita sekä laatia tilinpäätös. " +
    "Rahainvartija on hallituksen jäsen.",
};
const ministerOfArtsAndSciencesRole: OfficerRole = {
  scaName: null,
  mundaneName: "Tiede- ja taideneuvos",
  emailStart: "moas",
  description:
    "Tiede- ja taideneuvos toimii tieteiden ja taiteiden harrastajien yhteyshenkilönä. Kiinnostus " +
    "tieteisiin ja taiteisiin riittää viran hoitamiseen, näyttöjä ei tarvita. Tiede- ja taideneuvos voi olla " +
    "joko hallituksen jäsen tai toimihenkilö.",
};
const heraldRole: OfficerRole = {
  scaName: "Airut",
  mundaneName: "Vaakuna- ja nimivastaava",
  emailStart: "airut",
  description:
    "Airut edistää heraldiikan harrastusta ja toimii nimi- ja vaakunarekisterin yhdyshenkilönä. " +
    "Airut voi olla joko hallituksen jäsen tai toimihenkilö.",
};
const heavyMarshalRole: OfficerRole = {
  scaName: "Marski",
  mundaneName: "taistelutoimintavastaava",
  emailStart: "marski",
  description:
    "Marski on taistelutoiminnan turvallisuusvastaava ja näin ollen hänen tulee tietää " +
    "SCA-taistelun perusasiat. Virallista turvallisuusasioihin liittyvää marskin pätevyyttä ei vaadita. " +
    "Marski voi olla joko hallituksen jäsen tai toimihenkilö.",
};
const webmasterRole: OfficerRole = {
  scaName: null,
  mundaneName: "Web-vastaava",
  emailStart: "webvastaava",
  description:
    "Webvastaava vastaa yhdistyksen kotisivujen päivittämisestä sekä näin sovittaessa myös " +
    "postituslistasta. Webvastaava voi olla joko hallituksen jäsen tai toimihenkilö.",
};
const scribeRole: OfficerRole = {
  scaName: "Kirjuri",
  mundaneName: null,
  emailStart: "kirjuri",
  description:
    "Kirjuri koordinoi kunniakirjojen tuottamista ja edistää kalligrafian harrastusta. Pitäjän kirjurille riittää " +
    "hyvin kiinnostus aiheeseen - taitoja voi kartuttaa viran ohella esimerkiksi järjestämälä kirjurinpajoja (scriptorium). " +
    "Kirjuri voi olla joko hallituksen jäsen tai toimihenkilö.",
};

export const getOfficerRoleName = ({ scaName, mundaneName }: OfficerRole): string =>
  !scaName || !mundaneName ? scaName ?? mundaneName : `${scaName} (${mundaneName})`;

export const officerRoles = [
  senechalRole,
  viceSenechalRole,
  chastellainRole,
  treasurerRole,
  ministerOfArtsAndSciencesRole,
  heraldRole,
  heavyMarshalRole,
  webmasterRole,
  scribeRole,
];

export const officers: Officer[] = [
  { mundaneName: "Tuomo Oila", scaName: "Tuomas Tharo", role: senechalRole },
  { mundaneName: "Liisa Oila", scaName: "Elena", role: treasurerRole },
  { mundaneName: "Outi Sivonen", scaName: "Adeliza de Bello", role: viceSenechalRole },
  { mundaneName: "Jukka Lindgren", scaName: "Johann vom Hasengraben", role: heraldRole },
  { mundaneName: "Juhana Seppänen", scaName: "Sanginkylän Juhana", role: heavyMarshalRole },
  { mundaneName: "Mari Voipio", scaName: "Johanna aff Hucka", role: webmasterRole },
  { mundaneName: "Hilla Haapamäki", scaName: "Grite von Esslingen", role: chastellainRole },
  { mundaneName: "Katariina Karvinen", scaName: "Elizabeth Beaufort", role: ministerOfArtsAndSciencesRole },
];
