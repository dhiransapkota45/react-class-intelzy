

// https://catfact.ninja/facts


// fetch("https://catfact.ninja/facts").then((data) => {
//     console.log("Data fetched", data)
//     return data.json()
// }).then((res) => {
//     console.log(res.data)
// })

console.log("first")

const fetchdata = async () => {
    console.log("inside function")
    const rawdata = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(rawdata)
    const data = await rawdata.json()
    console.log(data.data[0].fact)
    console.log("static")
}

fetchdata()

console.log("second")

