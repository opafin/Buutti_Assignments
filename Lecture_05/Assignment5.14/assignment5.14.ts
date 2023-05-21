function credentializaattor(firstName: string, lastName: string) {
  const currentYear = new Date().getFullYear()
  const username = `B${currentYear.toString().slice(-2)}${firstName[0].toLowerCase()}${lastName[0].toLowerCase()}`
  const password = `${String.fromCharCode(Math.floor(Math.random() * 26) + 65)}${firstName[0].toLowerCase()}${lastName
    .slice(-1)
    .toUpperCase()}${String.fromCharCode(Math.floor(Math.random() * 15) + 33)}${currentYear.toString().slice(-2)}`
  return [username, password]
}

console.log(credentializaattor('Tarzan', 'Jane'))
// [ 'B23tj', 'MtE+23' ]
