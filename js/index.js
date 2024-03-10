// console.log("hi")

// var i = 10;

// let j = 30;
// j = "string"

// const k = 50;

// if (5>=5) {
//     console.log("this is if condition")
// } else {
//     console.log("this is else condition")
// }

// console.log(j)

// let i = 6
// let j = "6"

// if (i == j) {
//     console.log("i is equal to j")
// } else {
//     console.log("i is not equal to j")
// }


// loops
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }


// functions

// function add(a, b) {
//     return a + b
// }
// const i = add(5, 6)
// console.log(i)



// const addfunctionwitharrow = (a, b) => {
//     return a + b
// }
// const j = addfunctionwitharrow(5, 6)
// console.log(j)


const newfunc = () => {
    console.log("this is new function")
}

const func = (i, j) => {
    console.log(j)
    console.log(i())
}

func(newfunc, "hi there")
