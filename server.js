
 function filterContactsDropDown() {
    const input = contactInput.value;
    suggestionsContainer.innerHTML = "";
    if(input!= ""){

   
    let data =  Object.keys(localStorage);
    const filteredContacts = data.filter(contact =>
        contact.includes(input)
        
    );
    localStorage.setItem("filteredContacts", JSON.stringify(filteredContacts));
    displaySuggestions();
    }
    
}
   
