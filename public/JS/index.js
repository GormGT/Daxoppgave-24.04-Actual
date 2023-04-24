const nameInsertForm = document.querySelector("form#nameInsertForm");
const welcomeMsg = document.querySelector("div#welcomeMsg");

if(sessionStorage.getItem("TypedName")){
    let name = sessionStorage.getItem("TypedName");
    let template = `
    <h2>Velkommen, vi ønsker deg alt som er godt, ${name}</h2>
    `;
    welcomeMsg.innerHTML = template;
}

nameInsertForm.addEventListener("submit", (e) => {
    const name = nameInsertForm.nameInsert.value;
    localStorage.setItem("TypedName", name);
    sessionStorage.setItem("TypedName", name);

    let template = `
    <h2>Velkommen, vi ønsker deg alt som er godt, ${name}</h2>
    `;
    welcomeMsg.innerHTML = template;
})