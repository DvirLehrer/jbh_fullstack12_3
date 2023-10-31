
let response = "";



let x= setInterval(() => {
   
    if(response.length>0){
        // console.log("1234");
        document.getElementById("results").innerHTML = response;
        // clearInterval(x);
    }
}, 100);

function u(){
    setTimeout(() => {
        response=document.getElementById("input2").value;
        
    }, 500);

}