let response = '';

setInterval(() => {
    if (document.getElementById('textBox').value !== '') {
        document.getElementById('display').style.display = 'flex';
        document.getElementById('display').innerHTML = "<p>" + response + "</p>";
    }
    else {
        document.getElementById('display').style.display = 'none';
    }
}, 100);

document.getElementById('textBox').addEventListener('input', () => {
    setTimeout(() => {
        response = 'Now you can see me!';
    }, 500)
}) 