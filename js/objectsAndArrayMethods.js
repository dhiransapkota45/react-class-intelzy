//objects in javascript

// const person = {
//     name : "John",
//     age : 30,
// }


const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'writing', 'coding'],
    greet: function () {
        console.log("greet function called")
    },
    newobj: {
        hi: "hello"
    }
};




const newfake = [3, 5, 2, 6]


// map method
// const newdata = newfake.map((data, index) => {
//     if (data >= 5) {
//         return data
//     }
// })

const newdata = newfake.map((data, index) => {
    return data + 1
})

const filtereddata = newfake.filter((data, index) => {
    if (data >= 5) {
        return data
    }
})
// console.log(newfake, filtereddata)
// console.log(newfake, newdata,)


const fakedata = [
    {
        date: "2021-01-01",
        amount: 100,
    },
    {
        date: "2021-01-02",
        amount: 200,
    },
    {
        date: "2021-01-03",
        amount: 300,
    }
]

const newfakedata = fakedata.map((data, index) => {
    return {
        ...data,
        amount: data.amount + 100
    }
})

console.log(newfakedata)

const obj = {
    name: "John",
    age: 30,
    hobbies: ['reading', 'writing', 'coding'],
    greet: function () {
        console.log("greet function called")
    },
    newobj: {
        hi: "hello"
    }
}


//spread operator
const newobj = {
    ...obj,
    name: "jo",
    age: 40,
    newkey: "hi"
}

// console.log(newobj, obj)


//object destructuring
const { name, age } = obj
console.log(name, age, obj.name)
