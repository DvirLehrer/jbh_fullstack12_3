
let response = ""
function kelet() {
    response = document.getElementById("input").value;
}
document.getElementById('input').addEventListener('input',kelet);


setInterval(() => {
    if (response.length > 0) {
        setTimeout(
            result, 1000);
    }
}, 100)
function result() {
    document.getElementById("div").innerText = "המשימה הושלמה בהצלחה!";
    document.getElementById("div").style.display = "block";

}
