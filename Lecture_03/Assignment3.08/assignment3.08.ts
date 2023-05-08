

function foloopfun(n: number): number{

    let sum: number = 0
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 && i % 3 === 0){
            sum += i;
        }
    }
    return sum;
}

function whilefun(n: number): number{
    
    let i = 1
    let sum = 0

    while (i < n)
    {
        if (i % 3 === 0 && i % 3 === 0) 
        sum += i
        i++
    }
    
    return sum

    }

console.log(foloopfun(10));
console.log(whilefun(10));