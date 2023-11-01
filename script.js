function call (){
let respons=document.getElementById("fname").value;
let time = setInterval(() => {
    if (respons.length!=0){
        let out = document.createElement("div");
        out.id= "output";
        document.body.appendChild(out);
        clearInterval(time)
    }
}, 100);
}