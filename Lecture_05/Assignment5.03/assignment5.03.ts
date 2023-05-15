Recipe503.prototype.toString = function () {
  return this.ingredients503.reduce((acc: string, cur: { name: string; amount: number }) => {
    return acc + `- ${cur.name} (${cur.amount})\n`
  }, `${this.name} (${this.servings} servings)\n\n`)
}
Ingredient503.prototype.increaseAmount = function () {
  this.amount++
}

Recipe503.prototype.setServings = function (Ingredient503: Array<{ name: string; amount: number }>) {}

function Ingredient503(name: string, amount: number) {
  this.name = name
  this.amount = amount
}

function Recipe503(name: string, ingredients503: Array<{ name: string; amount: number }>, servings: number) {
  this.name = name
  this.ingredients503 = ingredients503
  this.servings
}

const flour = new Ingredient503('flour', 300)
const water = new Ingredient503('water', 150)
const oil = new Ingredient503('Oil', 30)
const salt = new Ingredient503('Salt', 0)

const tortillas = new Recipe503('tortillas', [flour, water, oil, salt], 12)

salt.increaseAmount()
salt.increaseAmount()
salt.increaseAmount()
salt.increaseAmount()
salt.increaseAmount()
salt.increaseAmount()
salt.increaseAmount()
salt.increaseAmount()
salt.increaseAmount()
salt.increaseAmount()

console.log(tortillas.toString())

// - flour (300)
// - water (150)
// - Oil (30)
// - Salt (10)

// Salty! ok now it works and prints with the  "root": true, in the package.json
// and Type Checking "strict": false, in the tsconfig.json
