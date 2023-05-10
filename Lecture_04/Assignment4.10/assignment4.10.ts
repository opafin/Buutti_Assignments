const namerific = [
  'Murphy',
  'Hayden',
  'Parker',
  'Arden',
  'George',
  'Andie',
  'Ray',
  'Storm',
  'Tyler',
  'Pat',
  'Keegan',
  'Carroll'
]

namerific.find((name) => {
  checkForPat(name)
})

function checkForPat(name: string) {
  if (name[name.length - 1] === 't' && name.length === 3) return name
}
