// 0. Declare two variables: `isDogBetter` with the value of `true`, and `isCatBetter` with the value of `false`.

const isDogBetter = true;
const isCatBetter = false;

// 1. Check the result of:

// - a) isDogBetter AND isCatBetter.

console.log(isDogBetter && isCatBetter);
// false. Variables are true and false , it comes out as false. Both have to be true to come out as true.


// - b) isDogBetter OR isCatBetter.

console.log(isDogBetter || isCatBetter);
// true. Enough that 1 variable is true to be true.


// - c) NOT (isDogBetter AND isCatBetter).

console.log(!(isDogBetter && isCatBetter));
// true. Negative plus false it turns true. Is it not false that---yes, it is true-

// 2. Declare three more variables `atoms`, `sandGrains`, `starsInSky`. Give these variables number values.
const atoms = 7;
const sandGrains = 10;
const starsInSky = 4;

// 3. Check the result of whether:

// - a) `atoms` is greater than `starsInSky` AND `atoms` is greater than `sandGrains`.

console.log((starsInSky && atoms) > sandGrains);
// false.  they are both smaller than sandGrains.

// - b) `atoms` is NOT equal to `sandGrains`.

console.log(atoms !== sandGrains);
// true. the not equals is true.

// - c) `starsInSky` is less than `sandGrains` OR `starsInSky` is greater than `atoms`.
console.log((starsInSky < sandGrains) || (starsInSky > atoms));
// true. FIrst one is correct, true.

// - d) `atoms` is equal to `starsInSky` OR `atoms` is NOT equal to `sandGrains`.
console.log((atoms === starsInSky) || (atoms !== sandGrains));
// true. the second formula is true, that atoms and sandGRains are not the same. SO it is enough to come as true.

// - e) `atoms` is greater than or equal to 10 AND `sandGrains` is less than or equal to 10.
console.log((atoms >= 10) && (sandGrains <= 10));
// false. atoms is not greater or equal to 10 although sandGrains is equals to 10. 

// - f) `atoms` multiplied by `starsInSky` is less than 100 OR whether `atoms` multiplied by `sandGrains` is greater than 100.
console.log((atoms * starsInSky) <  100) || (atoms * sandGrains > 100);
// true. 


// THis could other formulas for the question:

if((atoms * starsInSky) < 100){
    return true;
}else{
    return false;
}
// false

if((atoms * starsInSky) >100){
    return true;
}else{
    return false;
}
// true



