type Officer = {
  mundaneName: string;
  scaName: string;
  role: Role
}


type Role = {
  scaName: string;
  mundaneName: string;
  email: string;
}

const senechalRole: Role = { scaName: 'Vouti', mundaneName: 'Puheenjohtaja', email: 'vouti (at) hucca.org' }
const chastellainRole: Role = { scaName: 'Kastellaani', mundaneName: 'Uusien jäsenten vastaava', email: 'kastellaani (at) hucca.org' }
const treasurerRole: Role = { scaName: '', mundaneName: 'Rahastonhoitaja', email: 'rahainvartija (at) hucca.org' }
const ministerOfArtsAndSciencesRole: Role = { scaName: '', mundaneName: 'tieteiden ja taiteiden vastaava', email: 'moas (at) hucca.org' }
const heraldRole: Role = { scaName: 'Airut', mundaneName: '', email: 'airut (at) hucca.org' }
const heavyMarshalRole: Role = { scaName: 'Marski', mundaneName: 'Taistelutoimintavastaava', email: 'marski (at) hucca.org' }

export const officers: Officer[] = [
  { mundaneName: 'Tuomo Oila', scaName: 'Tuomas Tharo', role: senechalRole  },
  { mundaneName: 'Sini Lindgren', scaName: 'Walborg Liucoin', role: chastellainRole },
  { mundaneName: 'Liisa Oila', scaName: 'Elena', role: treasurerRole },
  { mundaneName: 'Kirsi Karhapää', scaName: 'Izabella del Cacco', role: ministerOfArtsAndSciencesRole },
  { mundaneName: 'Jukka Lindgren', scaName: 'Johann von Hasemgraben', role: heraldRole },
  { mundaneName: 'Juhana Seppänen', scaName: 'Sanginkylän Juhana', role: heavyMarshalRole },
]
