const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks    = document.querySelector(".ulBx")

const currentLink = document.location.href
const firstLink   = document.getElementById("0")
const secondLink  = document.getElementById("1")
const thirdLink   = document.getElementById("2")
const fourthLink  = document.getElementById("3")
const fifthLink   = document.getElementById("4")
const sixthLink   = document.getElementById("5")

const linksArray = [firstLink,secondLink,thirdLink,fourthLink,fifthLink,sixthLink]
console.log(fifthLink("baseUri"))
linksArray.forEach(Element=>{
    if (Element("baseUri") === currentLink){
        return true
    }
})


menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})


