// deklarasjoner
const nameInsertForm = document.querySelector("form#nameInsertForm");
const luckForm = document.querySelector("form#luckForm");
const welcomeMsg = document.querySelector("div#welcomeMsg");
const counter = document.querySelector("div#counter h1#number");
const peopleList = document.querySelector("footer");

let remainSec;
let peopleArray = [];
let luckNum;

// oppdater klokken
function updateClock(){
    let date = new Date();
    remainSec = 60 - date.getSeconds().toString();

    if(remainSec == 60){
        console.clear();
        console.log("New minute");
        genNum();
    }
}

// oppdater klokken hvert sekund
setInterval(updateClock, 1000);

// funksjoner

// generer et lykketall
function genNum(){
    let num = Math.floor(Math.random() * 100);
    counter.innerHTML = num;
    if(num = luckNum){
        console.log("It sure is your lucky day huh");
    }
}

// hent ut navn fra sessionstorage
if(sessionStorage.getItem("TypedName")){
    let name = sessionStorage.getItem("TypedName");
    let template = `
    <h2>Velkommen, vi ønsker deg alt som er godt, ${name}</h2>
    `;
    welcomeMsg.innerHTML = template;
}

// hent ut supportere fra localstorage
if(localStorage.getItem("Names")){
    peopleArray = JSON.parse(localStorage.getItem("Names"))
    peopleArray.forEach(person => {
        let template = `
            <p>${person}</p>
        `;
        peopleList.innerHTML += template;
    });
}

// kjør når navn blir submitta
nameInsertForm.addEventListener("submit", (e) => {
    const name = nameInsertForm.nameInsert.value;
    peopleArray.push(name);
    localStorage.setItem("Names", JSON.stringify(peopleArray));
    sessionStorage.setItem("TypedName", name);

    let template = `
    <h2>Velkommen, vi ønsker deg alt som er godt, ${name}</h2>
    `;
    welcomeMsg.innerHTML = template;
})

luckForm.addEventListener("submit", () => {
    luckNum = luckForm.luckInput.value;
})

// kjør funksjoner
genNum();
updateClock();