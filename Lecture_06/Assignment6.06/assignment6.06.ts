import { ArrayRandomizer } from '../../Lecture_04/Assignment4.19/assignment4.19'

// #SOLUTION 1
function largestAndSecondLargest(numbers: number[]) {
  let largestNum = 0
  let secondLargestNum = 0
  for (const num of numbers) {
    if (num > largestNum) {
      secondLargestNum = largestNum
      largestNum = num
    } else if (num > secondLargestNum) {
      secondLargestNum = num
    }
  }
  console.log(largestNum)
  console.log(secondLargestNum)
}

const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
largestAndSecondLargest(arrayOne)

// lets test some more orientations with the ArrayRandomiser made in 4.19!
const arrayTwo = ArrayRandomizer(arrayOne)
console.log(arrayTwo)
largestAndSecondLargest(arrayTwo)

// [5, 9, 3, 1,  6, 2, 8, 7, 4, 10]
// 10
// 9

// [6, 7, 3, 5,  2, 9, 4, 1, 8, 10]
// 10
// 9

// same reports!
