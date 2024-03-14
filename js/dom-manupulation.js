const divelement = document.getElementById('hello');
console.log(divelement)

// const divsection = document.getElementsByClassName('hi');
// console.log(divsection[0])

// const sameelement = document.getElementsByTagName('div');
// console.log(sameelement[0])

// const queryelement = document.querySelector('div');
// console.log(queryelement)

// const queryelementall = document.querySelectorAll('div');
// console.log(queryelementall)

// divelement.textContent = "Hello World"


// accessing the text in html element
// const data = divelement.textContent
// console.log(data)
// const data2 = divelement.innerHTML
// console.log(data2)

// const data3 = divelement.innerText
// console.log(data3)

const namelement = document.getElementById('name');
console.log(namelement.textContent)


const btn = document.getElementById('btn');
// let count = 0
btn.addEventListener("click", () => {
    // count++
    // console.log("Button Clicked")
    // namelement.textContent = "Hello World"
    // namelement.style.color = "red"
    // namelement.style.backgroundColor = "black"
    // namelement.style.fontSize = "30px"
    // namelement.style.fontFamily = "Arial"

    // namelement.id = "newid"
    // console.log(namelement.textContent === "Hello World")
    if (namelement.textContent === "Hello World") {
        namelement.textContent = "Hi world"
    } else {
        namelement.textContent = "Hello World"
    }
})