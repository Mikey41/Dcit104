//Michael-Angelo Obeng-Konadu(10950757)
//I Michael-Angelo Obeng-Konadu endorse this code.
//Write a program to calculate the average of all prime numbers between 1 and n.
function primeNumAverage(max)
{
    var store  = [], i, j, primes = []; var sum = 0; var avg;
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    for(let i = 0; i < primes.length; i++){
        sum += primes[i]
    }
   avg = sum/primes.length;
    return avg;
}

console.log(primeNumAverage(30));
