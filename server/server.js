async function storage () {
    let friendsList = await fetch('file.json');
    let convert = await friendsList.json();
    console.log(convert);
    
    convert.forEach(element => {
        localStorage.setItem(element.firstName + " " + element.lastName, element.email);
    });
}


let display = false;
let nameList = [];

function getNamedList (letter) {
    document.getElementById('container').innerHTML = ""

    if (letter != "") {
        let keys = Object.keys(localStorage);
        let arr = keys.filter((elm)=> elm.startsWith(letter))
        console.log(arr);
        if (display){
            displayNamesTest(arr);
        }

        nameList = arr;


    }

}

function displayNamesTest(arr){
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