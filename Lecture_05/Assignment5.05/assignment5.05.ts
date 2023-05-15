import { tomaatti } from '../Assignment5.04/assignment5.04'
import { jauheliha } from '../Assignment5.04/assignment5.04'
import { Recipe, Ingredient } from '../Assignment5.04/assignment5.04'

interface HotRecipe extends Recipe {
  pepperRating: number
}
class HotRecipe extends Recipe {
  heatLevel: number
  constructor(name: string, ingredients: Ingredient[], amountOfDishes: number, pepperRating: number) {
    super(name, ingredients, amountOfDishes)
    this.heatLevel = pepperRating
  }
  HottoString() {
    if (this.heatLevel > 5) return `'WOOOOOH' + ${this.heatLevel}`
  }
}
const fierylihapullasoppa = new HotRecipe('fierylihapullasoppa', [jauheliha, tomaatti], 5, 10)
console.log(fierylihapullasoppa.HottoString())
