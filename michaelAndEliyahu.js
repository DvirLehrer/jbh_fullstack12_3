let response = '';

setInterval(() => {
    if (response.length > 0) {
        document.getElementById('display').style.display = 'block';
        document.getElementById('display').innerText = response;
    }
}, 100);

document.getElementById('textBox').addEventListener('input', () => {
    setTimeout(() => {
        response = 'abc';
    }, 500)
}) 