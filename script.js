let response = ""

async function inputChange() {
    let inputValue = document.getElementById('textbox').value;
    response = httpRequest(inputValue);
    displayResult();
}

function httpRequest(input) {
    location.href = "server/test_server.html?h=" + input;
    return "ABC";
}


document.getElementById('textbox').addEventListener('input',inputChange);

function displayResult() {
    document.getElementById("div").innerText = response;
    document.getElementById("div").style.display = "block";

}


