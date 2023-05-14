// high level function smash solution
console.log(process.argv[2].split(' ').map((a) => a.split('').reverse().join('')).join(' '))

const long = 'Tarzan thought this was a very long sentence. Then he saw Jane reverse the words in place using JavaScript and his mind was blown'
const gnol = 'nazraT thguoht siht saw a yrev gnol .ecnetnes nehT eh was enaJ esrever eht sdrow ni ecalp gnisu tpircSavaJ dna sih dnim saw nwolb'

// og foloop heard reduce() has an accumulator, so og foloop got two, and did the job walking backwards
let mainAccumulator = '' 
let childAccumulator = ''
for (let k=long.length; k >= 0; k--) {
    var letter = (' ' + long)[k]
    childAccumulator += letter
    if (letter == ' ') {
        mainAccumulator = childAccumulator + mainAccumulator
        childAccumulator = ''
    }
}
console.log(mainAccumulator.trim());

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

// // this works too: the fabulous reduce and foloop together
console.log(long.split(' ').reduce((a, b, i, d) => {
    for (let j = b.length -1; j >= 0;j--) {
     a += b[j]   
    }
    if(i ===  d.length -1) return a 
    else return a + " "
}, ''))
 

// // spread, and reduce inside reduce -inception for maximal fabulousity.
console.log(long.split(' ').reduce((a, b, i, d) => {
    a += [...b].reduce((x, y) => y.concat(x),'') 
    if(i ===  d.length -1) return a 
    else return a + " "
}, ""))

// // instead of using .split(''), [...spread] is used to turn the string into an array
// // unlike the og foloop, reduce() is confused by strings and needs an array

// // [...b].reduce((x, y) => y.concat(x),'') this is the part that reverses the string
// // in the concat() call the reduce's() accumulator and the element switch places, reversing the string.

// // reduce()'s provide direct access to array details and an accumulator
// // another benefit is that because the params used with reduce()&callbkfn are always the same, it's
// // sometimes easier to read than an og foloop surrounded by custom variables.

