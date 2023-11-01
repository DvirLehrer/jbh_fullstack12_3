let response = '';
const display = document.getElementById('display');
const textBox = document.getElementById('textBox');

textBox.addEventListener('input', () => {
    clearTimeout(responseTimeout);
    responseTimeout = setTimeout(() => {
        response = textBox.value;
        updateDisplay();
    }, 500);
});

let responseTimeout;

function updateDisplay() {
    if (response.length > 0) {
        display.style.display = 'block';
        display.innerText = response;
    } else {
        display.style.display = 'none';
    }
}
