
function doSomething(){
    let response = document.getElementById('theHtmlInput').value;
    let x = setInterval(()=>{
        if(response.length > 0){
            let newDiv = document.createElement('div');
            newDiv.innerText = response;
            newDiv.id = 'newDiv';
            document.body.appendChild(newDiv);
            clearInterval(x);
        }
    },2000);
}
