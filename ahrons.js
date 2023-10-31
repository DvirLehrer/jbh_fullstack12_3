
let response = "";
let currntEvent;

let x = setInterval(() => {
    document.getElementById("res" + currntEvent).innerHTML = response;
}, 10);

function showmessage() {
    setTimeout(() => {
        let name = currntEvent;
        response = document.getElementById("input" + name).value;
    }, 500);
}

document.querySelectorAll(".input").forEach(element => {
    element.addEventListener("input", (event) => {
        currntEvent = event.target.name;
        showmessage();
    });

});
