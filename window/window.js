// console.log("HI")

// console.log(location)
// console.log(console.log("HI"))

// const btn = document.querySelector('#btn')

// btn.addEventListener('click', () => {
// console.log('btn clicked')
// location.href = "https://www.google.com/"
// location.reload()
// location.replace("https://www.google.com/")

// localStorage.setItem("name", "john")
// localStorage.setItem("age", 30)

// localStorage.removeItem("name")
// localStorage.clear()


// sessionStorage.setItem("name", "john")
// sessionStorage.setItem("age", 30)

// sessionStorage.removeItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")

// cookies
// document.cookie = "name=John;expires=Thu, 18 Dec 2013 12:00:00 UTC";
// document.cookie = "age=30"
// })

console.log(localStorage.getItem("age"))


//localStorage, sessionStorage, cookies

// localStorage.setItem('name', 'John')



setTimeout(() => {
    // console.log("hi")
    // btn.textContent = "you are hacked"
}, 3000)

setInterval(() => {
    // console.log("it will run every 3 seconds")
}, 3000)


const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')



setInterval(() => {
    //date class in js
    const date = new Date()
    const removeAmPm = date.toLocaleTimeString().substring(0, 8)
    const newdata = removeAmPm.split(":")
    hour.textContent = newdata[0]
    minute.textContent = newdata[1]
    second.textContent = newdata[2]

}, 1000)