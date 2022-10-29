"use strict"; 

const menu = document.body.querySelector("nav");
const menuItems = menu.querySelectorAll("button");
let activeItem = menu.querySelector(".active");

function clickItem(item) {
    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (item.classList.contains("menu__item")) {
        item.classList.add("active");
    }
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }
    activeItem = item;
    
}




menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const redirectStart = () => {
    window.location.href = "/#"
}
const redirectAbout = () => {
    window.location.href = "/#rAbout"
}

const redirectProjects = () => {
    window.location.href = "/#rProjects"
}

const redirectContact = () => {
    window.location.href = "/#rAbout"
}