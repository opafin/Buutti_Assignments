export interface Ingredient {
  name: string
  amount: number
  toString(): string
}

export interface Recipe {
  name: string
  ingredients: Ingredient[]
  amountOfDishes: number
  toString(): string
}

export class Ingredient implements Ingredient {
  constructor(name: string, amount: number) {
    this.name = name
    this.amount = amount
    this.toString = function () {
      return `${this.name} ${this.amount}`
    }
  }
  scale(factor: number) {
    factor * this.amount
  }
}

export class Recipe implements Recipe {
  constructor(name: string, ingredients: Ingredient[], amountOfDishes: number) {
    this.name = name
    this.ingredients = ingredients
    this.amountOfDishes = amountOfDishes
    this.toString = function () {
      // fabulous!
      return this.ingredients.reduce((acc: string, cur: { name: string; amount: number }) => {
        return acc + `- ${cur.name} (${cur.amount})\n`
      }, `${this.name} (${this.amountOfDishes} servings)\n\n`)
    }
  }
}

export const jauheliha: Ingredient = new Ingredient('jauheliha', 50)
export const tomaatti: Ingredient = new Ingredient('tomaatti', 50)

const lihapullakeitto: Recipe = new Recipe('lihapullakeitto', [jauheliha, tomaatti], 50)

console.log(lihapullakeitto.toString())
