let bell = document.getElementById("bell");
// menu 
let menu = document.getElementById("menu");
// click to bell
bell.onclick = ()=>{
    bell.classList.toggle("gold");
}
// click to menu
menu.onclick = ()=>{
    document.querySelector(".admin-page").classList.toggle("tool");
    document.querySelector(".dashboard").classList.toggle("short");
    bell.classList.toggle("move");
    document.querySelector(".dark-light").classList.toggle("run");
}





















