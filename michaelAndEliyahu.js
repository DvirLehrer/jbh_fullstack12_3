let response="";
setInterval(()=>{
    if (response.length>0){
        document.getElementById('display').style.display='block';
    }

},100);
document.getElementById('textBox').oninput = setTimeout(()=> response ="abc",500)