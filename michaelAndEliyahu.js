let response = '';

setInterval(() => {
    if (response.length > 0) {
        document.getElementById('display').style.display = 'block';
        document.getElementById('display').innerText = response;
    }else{document.getElementById('display').style.display = 'none';}
}, 100);

document.getElementById('textBox').addEventListener('input', () => {
    setTimeout(() => {
        console.log('hi')
        // response = document.getElementById('textBox').value;
        response = 'abc';
    }, 500)
}) 