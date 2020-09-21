// function checkDriverAge (age) {
//     if (age >= 18) {
//         console.log("Good to go!");
//     } else {
//         console.log("Nope, too young");
//     }
// }

// var checkDriverAge2 = function (age) {
//     if (age >= 18) {
//         console.log("Good to go!");
//     } else {
//         console.log("Nope, too young");
//     }
// }

// var list = ["raz","dwa","trzy","cztery"];
// var list2 = ["pies", "kot"];
// console.log(list[1]);

// list.shift();
// console.log(list);

// list.pop();
// console.log(list); 

// list.push("elephant");
// console.log(list);

// var list3 = list.concat(list2);
// console.log(list3);

// list3.sort();
// console.log(list3);

// 2 zadannie

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.shift();
// array.sort();
// array.push("Kiwi");
// array.shift();
// array.reverse();
// console.log(array);

// array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(array2[1][1]);

// var user = {
//     name: "Hola",
//     age: 20,
//     hobby: "Soccer",
//     isMarried: false
// }

// user.favouriteFood = "spinach";

// Facebook

var user = {
    username: "Rafal",
    password: "123"
}

var user1 = {
    username: "Ania",
    password: "456"
}

database = [user, user1, 
    {
    username: "John",
    password: "789"      
    }];

newsfeed = [
    {
        username: "John",
        timeline: "siem"
    },
    {
        username: "Adam",
        timeline: "elo"
    },
    {
        username: "Jenny",
        timeline: "howdy"
    }
]

function isUserValid (username, password) {
    for (let i = 0; i < database.length; i++) {
        const element = database[i];
        if (database[i].username == username && database[i].password == password) {
            return true;
        }
    }
    return false;
}

function singIn(username, password) {
        if (isUserValid(username,password)) {
            console.log(newsfeed);            
        } else {
            alert("Spierdalaj");
        }
}

// var userPrompt = prompt("Podaj username");
// var pwPrompt = prompt("Podaj password");

// singIn(userPrompt,pwPrompt);

// loops

// var list = [
//     "apple",
//     "orange",
//     "banana",
//     "mango",
//     "avocado"
// ]

// for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     list[index]=list[index] + "!";
//     console.log(list[index]);
// }

// function funkcja (i, index) {
//     console.log(i, index);
// };

// list.forEach(funkcja);

// EVENT LISTERNERS
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


