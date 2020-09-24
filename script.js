var button = document.getElementById("dodaj");
var ageInput = document.getElementById("input");
var ul = document.getElementById("lista");

function inputLength () {
    return ageInput.value.length;
}

function addDeleteButton (li) {
    const newButton = document.createElement("button");
    newButton.innerHTML = 'Delete!';
    newButton.className = "delete-button";
    li.appendChild(newButton);
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(ageInput.value));
    ul.appendChild(li);
    ageInput.value = "";
    addDeleteButton(li);
}

function addListAfterClick() {
    if (inputLength () > 0){
        createListElement();
    }
}

function listItemChecked(e) {
    const target = e.target;
    if (target.matches ("li")) {
        target.classList.toggle("done");
    } 
}


function addListAfterKeypress(event) {
    if (inputLength () > 0 && event.keyCode == 13){
        createListElement();
    }
}

function deleteListItem(e) {
    const t = e.target;
    if (t.matches ('.delete-button')) {
        t.parentElement.remove();
    }
}


button.addEventListener("click", addListAfterClick);
ageInput.addEventListener("keypress", addListAfterKeypress); 
ul.addEventListener("click", listItemChecked);
ul.addEventListener("click", deleteListItem);


