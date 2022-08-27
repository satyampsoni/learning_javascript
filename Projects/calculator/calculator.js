/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/
//**********************************ES5************************************
//Write a function that sums two numbers
function sum(a,b){
    return a + b
}

sum(2,5) //calling a function
console.log(sum(2,5))

//Write a function that subtracts two numbers
function sub(a,b){
    return a - b
}

//write a function that divides two numbers
function div(a,b){
      if(b !== 0)
    {
        return a/b
    }
    else {
        console.log("Numbers are not divisible by 0")
    }
}


//write a function that multiplies two numbers
function mul(a,b) {
    return a * b
}

console.log(sum(2,5))
console.log(sub(2,5))
console.log(mul(2,5))
console.log(div(2,5))

