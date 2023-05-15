function Ingredient502(name: string, amount: number) {
  this.name = name
  this.amount = amount
  this.toString = function () {
    return `${this.name} ${this.amount}`
  }
}

function Recipe502(name: string, ingredients: any[], amountOfDishes: number) {
  this.name = name
  this.ingredients = ingredients
  this.amountOfDishes = amountOfDishes
  this.toString = function () {
    return `${this.name}:${ingredients.map(a => " "+ a.name.toString()+": "+a.amount)}, dishes: ${this.amountOfDishes}` //prettier-ignore
  }
}
//lihapullakeitto: tomaatti: 50, jauheliha: 50, dishes: 50

const jauheliha502 = new Ingredient502('jauheliha', 50)
const tomaatti502 = new Ingredient502('tomaatti', 50)

const lihapullakeitto502 = new Recipe502('lihapullakeitto', [tomaatti502, jauheliha502], 50)

console.log(lihapullakeitto502.toString())

// constructor-funktiota voi tehtävänannon mukaisesti käyttää ilman clässiäkin, illustrates how the constructor is a function, interesting
// tested Array<{name: string, amount: number}>, but ended up using any[]
