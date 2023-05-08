

function foloopfun(n: number): number{

    let sum: number = 0
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

function whilefun(n: number): number{
    
    let i = 0
    let sum = 0

    while (i <= n)
    {
        if (i % 3 === 0 || i % 5 === 0)
        { 
        sum += i
        i++
        }
    }
    
    return sum

    }
    
function fizzBuzz(n: number): void{
    
    let i = 0

    while (i <= 20)
    {
        i++;

        if (i % 3 === 0 && i % 5 === 0)
        { 
        console.log("FizzBuzz");
        }
        else if (i % 3 === 0){
        console.log("Fizz");
        }
        else if (i % 5 === 0){
        console.log("Buzz");
        }
        else
        {
        console.log(i);
        }        
    }
}



function pyramid(n: number): void{
    
    let i = 0
    let tree = ""

    while (i <= n)
    {

        console.log(tree += "&");
        i++;
    }

    }

// fizzBuzz(20);
// console.log(foloopfun(17));
// console.log(whilefun(17));
pyramid(5);