//ARRAYS
//Arrays are containers of different data types

//creating an array
lang = ["python", "java", "javascript", "php"]
console.log(lang)

//Arrays
const groceries = ['apple', 'banana', 'orange', 'pears']
console.log(groceries)

//grabiing the index
console.log(groceries[1])
console.log(groceries[3])

//pushing to arrays
groceries.push("cookies")
console.log(groceries) // this will append the cookies to the array

//slicing

console.log(groceries.slice(0,2))

//upto the end
console.log(groceries.slice(2))

//indexof
console.log(groceries.indexOf("orange"))

//lengthof 
console.log(groceries.length)

//ARRAY METHODS
//MAP, FILTER, REDUCE


//MAP
// .map() ----> loops through it and returns an array according to the condition

let map1 = [1,2,3,4,5].map(number => number * 2)
console.log(map1)

let map2 = ["a", "b", "c"].map(letter => letter + " alphabet")
console.log(map2)

function doubleMap(arr){
    return arr.map(arr => arr * 2)
}

console.log(doubleMap([1,2,3]))

//Filter function
//loops an array and return results with matching condition

const filter = (numbers, greaterThan) => {
    let result = []
    for (const number of numbers) {
        if (number > greaterThan) {
            result.push(number)
        }
    }
    return result
}

console.log(filter([1,2,3,4,5]),2)


