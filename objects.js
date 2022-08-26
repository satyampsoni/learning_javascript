//OBJECTS {key : value}

const person = {
    name: 'Leonardo',
    shirt: 'white'
}

// Acessing values from the person (dot method)
console.log(person.name)
console.log(person.shirt)

//Acessing values from the person (bracket method)
console.log(person['name'])
console.log(person['shirt'])

//accessing the whole object
console.log(person)

//putting a property into object
person["phone"] = "998877655"

console.log(person)


//person2

const person2 = {
    name: "Qazi", 
    shirt: "black"
}

console.log(person2)
console.log(person2.name)


function introducer(name, shirt, assets, liablity) {
    const person = {
        name: name,
        shirt: shirt,
        assets : assets,
        liablity: liablity,
        //creating a method
        networth : function () {
            return this.assets - this.liablity
        }

    }
    x = `Hi my name is ${person.name} and my shirt color 
    is ${person.shirt} and my net worth is ${person.networth()}`
    
    return x
}

console.log(introducer("satyam", "green", 1000000, 20000))


