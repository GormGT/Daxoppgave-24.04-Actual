const nameInsertForm = document.querySelector("form#nameInsertForm");
const welcomeMsg = document.querySelector("div#welcomeMsg");

let remainSec;

function updateClock(){
    let date = new Date();
    remainSec = 60 - date.getSeconds().toString();
    console.log("Counting...", date.getSeconds().toString(), remainSec, date.getMinutes().toString());

    if(remainSec == 60){
        console.clear();
        console.log("New minute");
    }
}

setInterval(updateClock, 1000);

if(sessionStorage.getItem("TypedName")){
    let name = sessionStorage.getItem("TypedName");
    let template = `
    <h2>Velkommen, vi ønsker deg alt som er godt, ${name}</h2>
    `;
    welcomeMsg.innerHTML = template;
}

nameInsertForm.addEventListener("submit", (e) => {
    const name = nameInsertForm.nameInsert.value;
    localStorage.setItem("TypedName", name); //REdo this
    sessionStorage.setItem("TypedName", name);

    let template = `
    <h2>Velkommen, vi ønsker deg alt som er godt, ${name}</h2>
    `;
    welcomeMsg.innerHTML = template;
})

updateClock();