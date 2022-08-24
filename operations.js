/* Maths operators
Multiply --> *
Divide --> /
Exponents --> **
Modulo/ Remainder --> %
Add --> +
Subtract --> -
*/

num1 = 6
num2 = 2

// ***********************************Multiply*********************************************************
mul = num1 * num2
console.log(mul)

// ***********************************Divide************************************************************

div = num1/num2
console.log(div)

// ***********************************Exponents***********************************************************

modulo = num1 % num2
console.log(modulo)

// ***********************************Multiply***********************************************************

add = num1 + num2
console.log(add)

// ***********************************Multiply***********************************************************

subtract = num1 - num2
console.log(subtract)


/* MATHS METHODS
floor --> Rounds down 
ceil --> Rounds up
random() --> gives the random number between 0 and 1
*/

/*
Math.floor(100.25)
// output - 100 (Rounding down)
Math.ceil(100.25)
// output - 101 (Rounding up)

*/

console.log(Math.floor(100.25))


console.log(Math.ceil(100.25))

console.log(Math.random())


//conditional operators
/* == ---> double equal means is equal to (with type correction)
=== ---> triple equal means is equal to (strict equality: no type correction)
> ----> greater than
< -----> less than
>= -------> greater than equal to
<= ---------> less than equal to
!= -----------> not equal to (with type correction)
!== ------------> not equal to (without type correction)
*/

console.log(2 == "2")
// It will print true because of type correction

console.log(2 === "2")
//It will print false because it does not support type correction

console.log(2!="2")
// It will print false beacuse of type correction

console.log(2!=="2")
// It will Print True because it does not support type correction