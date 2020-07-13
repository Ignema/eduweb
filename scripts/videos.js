
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

vids = document.getElementById("vids");

let videos = [];

const url='http://localhost:3000/api/v1/videos';

async function getVideos(){

 let response = await fetch(url);

        response.json().then((data)=>{

            videos=data;

            index = 2;

            for(video of videos){

                let icon = document.createElement("ion-icon");
                icon.setAttribute('name',"play-circle");
            
                let inner = document.createElement("p");
                inner.innerHTML = video.title;
            
                let elem = document.createElement("li");
            
                elem.className="video";
                
                elem.appendChild(icon);
                elem.appendChild(inner);
            
                elem.setAttribute('id', index);
            
                vids.appendChild(elem);

                index++;
            }

    });

 }

getVideos();

