// storing og input to log it in the result
const text = process.argv[2]
// pre-process to ignore spaces, and case
const edit = text.toLowerCase().split(' ').join('')

if (edit === [...edit].reverse().join('')) {
  console.log(`Yes, '${text}' is a palindrome`)
} else console.log(`No,'${text}' is not a palindrome`)

// Yes, 'saippuakivikauppias' is a palindrome
// No,'saippuakäpykauppias' is not a palindrome

// Yes, 'Aattona Jania aina janottaa' is a palindrome
// Yes, 'innostunut sonni' is a palindrome
// Yes, 'saippuakukkakivikakkukauppias' is a palindrome

// No,'tarzan' is not a palindrome
// No,'jane' is not a palindrome
// No,'monkees' is not a palindrome
