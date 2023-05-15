Recipe503.prototype.toString = function () {
  return this.ingredients.reduce((acc: string, cur: { name: string; amount: number }) => {
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

function Recipe503(name: string, ingredients: Array<{ name: string; amount: number }>, servings: number) {
  this.name = name
  this.ingredients = ingredients
  this.servings = servings
  this.toString = function () {}
}

const flour = new Ingredient503('flour', 300)
const water = new Ingredient503('water', 150)
const oil = new Ingredient503('Oil', 30)
const salt = new Ingredient503('Salt', 0)

const tortillas = new Recipe('tortillas', [flour, water, oil, salt], 12)

console.log(tortillas.toString())
