async function storage () {
    let friendsList = await fetch('file.json');
    let convert = await friendsList.json();
    console.log(convert);
    
    convert.forEach(element => {
        localStorage.setItem(element.firstName + " " + element.lastName, element.email);
    });
}

storage();


function getNamedLeast () {
    document.getElementById('container').innerHTML = ""

    let mainInput = document.getElementById('myInput').value;

    if (mainInput != "") {
        let keys = Object.keys(localStorage);
        console.log(keys);
        let arr = keys.filter((elm)=> elm.startsWith(mainInput))
        console.log(arr);

        arr.forEach(element => {
        
            let myDiv = document.createElement('div');

            document.getElementById('container').appendChild(myDiv);
            myDiv.innerHTML = element;

            myDiv.addEventListener("click", ()=>{
            document.getElementById('container').innerHTML = ""
            let newDiv = document.createElement('div');
            // newDiv.innerText = element;
            // newDiv.innerText = localStorage.getItem(element);
            newDiv.innerHTML = `${element}<br>${localStorage.getItem(element)}`;
            document.getElementById('container').appendChild(newDiv);
        })
    })
    }

}