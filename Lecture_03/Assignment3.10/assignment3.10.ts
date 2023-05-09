// Create a program that takes in one argument from command line, a language code
// (e.g. "fi", "es", "en"). Console.log "Hello World" for the given language for atleast three languages. It should default to console.log "Hello World".
// Remember to test that the program outputs the right answer in all cases.

// Hint: use process.argv for input

let pick = process.argv[2];
pick = pick.toLowerCase();

switch (pick) {
  case "c#":
    console.log('C#: Console.WriteLine("Hello world")');
    break;
  case "python":
    console.log("Python: print('Hello world')");
    break;
  case "ascii":
    console.log("Ascii: 104 101 108 108 111 32 119 111 114 108 100");
    break;
}
