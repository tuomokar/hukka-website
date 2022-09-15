type Officer = {
  mundaneName: string;
  scaName: string;
  role: Role
}


type Role = {
  scaName: string | null;
  mundaneName: string | null;
  email: string;
}

const senechalRole: Role = { scaName: 'Vouti', mundaneName: 'puheenjohtaja', email: 'vouti (at) hucca.org' }
const chastellainRole: Role = { scaName: 'Kastellaani', mundaneName: 'uusien jäsenten vastaava', email: 'kastellaani (at) hucca.org' }
const treasurerRole: Role = { scaName: null, mundaneName: 'rahastonhoitaja', email: 'rahainvartija (at) hucca.org' }
const ministerOfArtsAndSciencesRole: Role = { scaName: null, mundaneName: 'tieteiden ja taiteiden vastaava', email: 'moas (at) hucca.org' }
const heraldRole: Role = { scaName: 'Airut', mundaneName: null, email: 'airut (at) hucca.org' }
const heavyMarshalRole: Role = { scaName: 'Marski', mundaneName: 'taistelutoimintavastaava', email: 'marski (at) hucca.org' }
const webmasterRole: Role = { scaName: null, mundaneName: 'webvastaava', email: 'webvastaava (at) hucca.org' }

export const officers: Officer[] = [
  { mundaneName: 'Tuomo Oila', scaName: 'Tuomas Tharo', role: senechalRole  },
  { mundaneName: 'Sini Lindgren', scaName: 'Walborg Liucoin', role: chastellainRole },
  { mundaneName: 'Liisa Oila', scaName: 'Elena', role: treasurerRole },
  { mundaneName: 'Kirsi Karhapää', scaName: 'Izabella del Cacco', role: ministerOfArtsAndSciencesRole },
  { mundaneName: 'Jukka Lindgren', scaName: 'Johann von Hasemgraben', role: heraldRole },
  { mundaneName: 'Juhana Seppänen', scaName: 'Sanginkylän Juhana', role: heavyMarshalRole },
  { mundaneName: 'Mari Voipio', scaName: 'Johanna aff Hucka', role: webmasterRole },
]
