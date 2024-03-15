const hamicon = document.getElementsByClassName("ham-icon")[0]

const smallSidebar = document.getElementsByClassName("small-sidebar")[0]

const closebtn = document.getElementById("close")

hamicon.addEventListener("click", () => {
    // smallSidebar.classList.add("change-width")
    // smallSidebar.style.display = "block"
    smallSidebar.style.width = "100%"
})

closebtn.addEventListener("click", () => {
    // smallSidebar.style.display = "none"
    smallSidebar.style.width = "0px"
})