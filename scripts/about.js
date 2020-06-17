const menu = document.getElementById("menu");

const nav = document.getElementById("nav-list");

const items = document.getElementsByClassName("nav-item");
const active_item = document.getElementsByClassName("nav-item-active");

const close = document.getElementById("close");

menu.addEventListener("click", ()=>{

    for (const item of items){

        item.style.color = "#fafafa";
    
        }

    active_item[0].style.color = "#fafafa";    

    nav.style.height = "100vh";
    nav.style.width = "100vw";

    close.style.display = "inline";


})

close.addEventListener("click",()=>{


    for (const item of items){

        item.style.color = "transparent";
    
        }

    active_item[0].style.color = "transparent"; 

    nav.style.height = "0";
    nav.style.width = "0";

    close.style.display = "none";


})