function call()
{
    let save= document.getElementById("input").value;

    let out = setInterval(() => {
        if(
            save.length!==0) {
                let newDiv = document.createElement("div");
                newDiv.id="newDiv"
                document.body.appendChild(newDiv);
                clearInterval(out);
            }  
    }, 100);
}