function toggleMenu() {
    const menu = document.querySelector(".menu-links"); //targets the menu-links on index.html
    const icon = document.querySelector(".hamburger-icon"); //targets the hamburger-icon on index.html
    menu.classList.toggle("open") //whenever you click "menu", it will open or close
    icon.classList.toggle("open") //whenever you click "icon", it will open or close
}