const loadsOfLikers = ['Detlaf', 'Eredin', 'Djikstra', 'Yennefer', 'Geralt', 'Ciri', 'Triss', 'Dandelion']
const liker = ['Avallach']
const nolikers: string[] = [] //<-- wut!
const coupleOfLikers = ['Eskiel', 'Regis']
const someLikers = ['Barnamas', 'Henrietta', 'Guillame']

function likers(names: string[]) {
  if (names.length === 1) {
    console.log(`${names[0]} likes this`)
  } else if (names.length === 2) console.log(`${names[0]} and ${names[1]} like this`)
  else if (names.length === 3) console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`)
  else if (names.length > 3) console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`)
  else console.log('däm, no one likes this')
}

likers(loadsOfLikers)
likers(liker)
likers(nolikers)
likers(coupleOfLikers)
likers(someLikers)

// Detlaf, Eredin and 6 others like this
// Avallach likes this
// däm, no one likes this
// Eskiel and Regis like this
// Barnamas, Henrietta and Guillame like this
