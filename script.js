const suggestionsContainer = document.getElementById('suggestions');
const output = document.getElementById('outputContainer');




function displaySuggestions() {

    const suggestions = JSON.parse(localStorage.getItem("filteredContacts"));

    output.innerHTML = "";

    suggestions.forEach(name => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.textContent = name;
        suggestionDiv.addEventListener('click', () => {

            suggestionsContainer.innerHTML = "";
            contactInput.value = name;
            displayContact(name);

        });

        suggestionsContainer.appendChild(suggestionDiv);


    });
}


function displayContact() {
    const contact = contactInput.value;
    const contactToShow = localStorage.getItem(contact);
    const text = document.createElement('div');
    text.innerHTML = `<p>${contact}<br>
     <p>Email: ${contactToShow}</p><br>
     <button id="emailButton" onclick="sendEmail('${contactToShow}')">Send Email</button>`
    output.appendChild(text);


}


function sendEmail(email) {
    window.location.href = "mailto:" + email;
}

async function storage() {
    let json = await fetch("contact.json");
    let data = await json.json();
    data.forEach(name => {
        localStorage.setItem(name.firstName + " " + name.lastName, name.email);
    });
}
storage();

document.addEventListener('click', (event) => {
    if (!event.target.closest('.autocomplete')) {
        suggestionsContainer.innerHTML = "";
    }
});
