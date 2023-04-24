const nameInsertForm = document.querySelector("form#nameInsertForm");
const welcomeMsg = document.querySelector("div#welcomeMsg");
const counter = document.querySelector("div#counter h1#number");
const peopleList = document.querySelector("footer");

let remainSec;
let peopleArray = [];

function updateClock(){
    let date = new Date();
    remainSec = 60 - date.getSeconds().toString();
    //console.log("Counting...", date.getSeconds().toString(), remainSec, date.getMinutes().toString());

    if(remainSec == 60){
        console.clear();
        console.log("New minute");
        genNum();
    }
}

setInterval(updateClock, 1000);

function genNum(){
    let num = Math.floor(Math.random() * 100);
    counter.innerHTML = num;
}

if(sessionStorage.getItem("TypedName")){
    let name = sessionStorage.getItem("TypedName");
    let template = `
    <h2>Velkommen, vi ønsker deg alt som er godt, ${name}</h2>
    `;
    welcomeMsg.innerHTML = template;
}

if(localStorage.getItem("Names")){
    peopleArray = JSON.parse(localStorage.getItem("Names"))
    peopleArray.forEach(person => {
        let template = `
            <p>${person}</p>
        `;
        peopleList.innerHTML += template;
    });
}

nameInsertForm.addEventListener("submit", (e) => {
    const name = nameInsertForm.nameInsert.value;
    //localStorage.setItem("TypedName", name); //REdo this
    peopleArray.push(name);
    localStorage.setItem("Names", JSON.stringify(peopleArray));
    sessionStorage.setItem("TypedName", name);

    let template = `
    <h2>Velkommen, vi ønsker deg alt som er godt, ${name}</h2>
    `;
    welcomeMsg.innerHTML = template;
})

genNum();
updateClock();