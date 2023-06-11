export const summerwords = [
  'grilli',
  'vene',
  'makkara',
  'metsä',
  'yö',
  'nuotio',
  'sauna',
  'soutu',
  'järvi',
  'kalastus',
  'marjastus',
  'sienestys',
  'terassi',
  'kuisti',
  'auringonlasku',
  'aamukaste',
  'luonto',
  'tulenteko',
  'lintujenlaulu',
  'pihakeinu',
  'ranta',
  'uistin',
  'verkko',
  'kanootti',
  'retki',
  'telttailu',
  'puucee',
  'kasvihuone',
  'huvimaja',
  'hirsikämppä',
  'rantasauna',
  'laituri',
  'soutuvene',
  'hyttynen',
  'muurahainen',
  'uimaranta',
  'perhomato',
  'koirankakka',
  'riippumatto',
  'kotakeittiö'
]
export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * summerwords.length)
  return summerwords[randomIndex]
}

let summerwordsString = ''
for (let i = 0; i < 10; i++) {
  summerwordsString += getRandomWord() + ' '
}

console.log(summerwordsString)
