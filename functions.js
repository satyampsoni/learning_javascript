//syntax
/* function name(arguments){
    operations or relations
}

calling a function
name(argument_value)
*/

//function01

function callmyname(){
    console.log("satyam")
    console.log("Javascript")
}

callmyname() //calling a function


// function02 - Making functions dynamic with arguments
function callmyname2(name){
    console.log(name)
}

 callmyname2("javascript")

//function 03 --- Introduction to Template literals
function greetings(name){
    //greet = "hi" + name + "nice to meet you"
    //or you can do the same with template literals
    greet = `Hi ${name}, Nice to meet you!`
    console.log(greet)
} 

greetings("satyam")


//function 04
function sum(a,b) {
    return a + b
}

console.log(sum(2,4))
num1 = sum(6,7)
console.log(num1)

// ARROW FUNCTION WITH EXPLICIT RETURN
const sumArrow2 = (a,b) => {
    return a + b
}

console.log(sumArrow2(5,7))





