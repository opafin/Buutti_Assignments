interface Ingredient502 {
  name: string
  amount: number
  toString(): string
}
interface Recipe502 {
  name: string
  ingredients: Ingredient502[]
  amountOfDishes: number
  toString(): string
}

class Ingredient502 implements Ingredient502 {
  constructor(name: string, amount: number) {
    this.name = name
    this.amount = amount
    this.toString = function () {
      return `${this.name} ${this.amount}`
    }
  }
}

class Recipe502 implements Recipe502 {
  constructor(name: string, ingredients: Ingredient502[], amountOfDishes: number) {
    this.name = name
    this.ingredients = ingredients
    this.amountOfDishes = amountOfDishes
    this.toString = function () {
      return `${this.name} ${this.ingredients} ${this.amountOfDishes}`
    }
  }
}

const jauheliha502: Ingredient502 = new Ingredient502('jauheliha', 69)
const tomaatti502: Ingredient502 = new Ingredient502('tomaatti', 69)

const lihapullakeitto502: Recipe502 = new Recipe502('lihapullakeitto', [jauheliha502, tomaatti502], 69)

console.log(lihapullakeitto502.toString())

// mietin tehtävää siten, että constructori voidaan rakentaa tehtävänannon mukaisesti classin ulkopuolella
// mutta en halunnut lisätä strictiä tsconfiggiin, koska sitä ei saa yleensä käyttää
// Array<{name: string, amount: number}>
