//console.log(Date.now())
//console.log("goodbye world!")
var isPrime = require('is-prime');
 
//console.log(isPrime(Date.now()));
//=> true
var time1=Date.now();
console.log("Hello")
console.log("The current time is:"+ time1)
console.log("Is the current time a prime number?")

if(isPrime(Date.now())==true)
    console.log("yes")
    else   
        console.log("No")