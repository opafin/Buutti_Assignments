import argon2 from 'argon2'
const hashedPass = argon2.hash('password').then((hash) => {
  console.log(hash)
})
console.log(hashedPass)
