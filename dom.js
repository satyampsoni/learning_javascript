//Acessing documents
console.log(document.documentElement)

//Acessing body
console.log(document.body)

//Acessing head
console.log(document.head)

//Accessing children
console.log(document.body.childNodes)
//The problem with childNodes is it will display indentations as text

console.log(document.body.children)
//children display only tags

//Acessing first child
console.log(document.body.firstchild)

//Acessing second child
console.log(document.body.secondchild)

//Acessing all the elements
x = document.body.children
for (nodes of x) {
    console.log(nodes)
}

console.log(Array.from(document.body))

//Acessing siblings
const h1tag = document.body.children[0]
console.log(h1tag)

let ultag = document.body.children[1]
console.log(ultag)

const firstli = ultag.children[0]
console.log(firstli)

const secondli = ultag.children[1]
console.log(secondli)

const thirdli = ultag.children[2]
console.log(thirdli)

// we can access next elements in different ways too
console.log(ultag.nextElementSibling)
console.log(firstli.nextElementSibling)

// Table DOM manipulation
const tabletag = ultag.nextElementSibling
console.log(tabletag)

//Acessing the rows from the table
console.log(tabletag.rows[0].cells[0].style = "backgroundcolor: red;")



//**************************************The  modern method*******************

//Acessing elements with the help of element
const ultagg = document.getElementById("element")
ultagg.style.backgroundcolor = "red"
console.log()

//Acessing elements with the help of tag

console.log(document.getElementsByTagName("table"))

//Queryselector

console.log(document.querySelectorAll('.first'))
