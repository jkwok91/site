/*

find the smallest number divisible by numbers from 1-20

*/

var bigNumber = {};
//bigNumber is an object whose properties are its prime factors
//the values of its properties will be the multiplicity of those prime factors

for (var i = 2; i <= 20; i++) {
    //find prime factorization
    pObject = pFact(i);
    for (primeFactor in pObject) { //primeFactor is property of pObject
        if (!(bigNumber.hasOwnProperty(primeFactor)) || (bigNumber[primeFactor] < pObject[primeFactor])) {
            //if bigNumber either doesn't have the prime factor or has less multiplicity,
            //then set property value of bigNumber equal to pObject
            bigNumber[primeFactor] = pObject[primeFactor];
        }
        //otherwise, do nothing
    }
}
//print prime breakdown of number, and then number
console.log(bigNumber);
console.log(multPrimes(bigNumber));
$(document).ready(function(){
    $('div#results').text('the smallest number that divides all the numbers from 1-20 is:');
    $('div#results2').text(multPrimes(bigNumber));
});

//helper functions here

//pFact (create objects for all numbers containing their prime factors)

function pFact(number) {
    var pObject = {};
    for (var i = 2; i <= number; i++) {
        //ughhhh so ugly
        if (number % i == 0) {
            number = number / i;
            pObject[i] = 1; //only because i need to initialize this
        }
        while (number % i == 0) { //while still divisible by this factor
            number = number / i;
            pObject[i]++;
        }
    }
    return pObject;
}

//exponent function

function multPrimes(primeObject) {
    theNumber = 1;
    for (prime in primeObject) {
        for (var i = 1; i <= primeObject[prime]; i++) {
            theNumber *= prime;
        }
    }
    return theNumber;
}