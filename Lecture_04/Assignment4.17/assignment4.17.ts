import { argv } from '../Assignment4.13/assignment4.13'
const long = 'Tarzan thought this was a very long sentence. Then he saw Jane reverse the words in place using JavaScript and his mind was blown'
const gnol = 'nazraT thguoht siht saw a yrev gnol .ecnetnes nehT eh was enaJ esrever eht sdrow ni ecalp gnisu tpircSavaJ dna sih dnim saw nwolb'

// #SOLUTION 1
// high level function smash solution
argv[2].split(' ').map(a => a.split('').reverse().join('')).join(' ')

// #SOLUTION 2
// og foloop heard reduce() has an accumulator, so og foloop got two, and did the job walking backwards
let mainAccumulator = '' 
let childAccumulator = ''
for (let k=long.length; k >= 0; k--) {
    const letter = (' ' + long)[k]
    childAccumulator += letter
    if (letter == ' ') {
        mainAccumulator = childAccumulator + mainAccumulator
        childAccumulator = ''
    }
}
console.log(mainAccumulator.trim());

// #SOLUTION 3
// the "for of loop" can directly iterate string characters 
// without a split(), ...spread or specifying a string[index]
let mainAcc = ''
let secondaryAcc = ''
for(const char of long)
{
    secondaryAcc = char + secondaryAcc
 if (char === " "){
    mainAcc += secondaryAcc
    secondaryAcc = ''
 }
}
console.log(mainAcc.trim());

// #SOLUTION 4
// this works too: the fabulous reduce and foloop together
console.log(long.split(' ').reduce((a, b, i, d) => {
    for (let j = b.length -1; j >= 0;j--) {
     a += b[j]   
    }
    if(i ===  d.length -1) return a 
    else return a + " "
}, ''))
 
// #SOLUTION 5
// spread, and reduce inside reduce -inception for maximal fabulousity.
console.log(long.split(' ').reduce((a, b, i, d) => {
    a += [...b].reduce((x, y) => y.concat(x),'') 
    if(i ===  d.length -1) return a 
    else return a + " "
}, ""))

// #JEEJEE about #SOLUTION 5 & reduce()
// instead of using .split(''), [...spread] is used to turn the string into an array
// unlike the og foloop, reduce() is confused by strings and needs an array

// [...b].reduce((x, y) => y.concat(x),'') this is the part that reverses the string
// in the concat() call the reduce's() accumulator and the element switch places, reversing the string.

// reduce()'s provide direct access to array details and an accumulator
// another benefit is that because the params used with reduce()&callbkfn are always the same, it's
// sometimes easier to read than an og foloop surrounded by custom variables.

