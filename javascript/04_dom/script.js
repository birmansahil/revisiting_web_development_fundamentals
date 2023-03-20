let el = document.getElementById("one");

el.className = "cool";

let elements = document.getElementsByClassName("hot");

if (elements.length >= 1) {
    // let firstItem = elements.item(0);
    let firstItem = elements[0];
    console.log(firstItem);
}

// Adding element using the innerHTML
let list = document.getElementsByTagName("ul");
console.log(list[0]);

list[0].innerHTML += "<li><a href='https://google.com' target='_blank'>Kale</a></li>";
list[0].innerHTML += "<li class='hot'>Carrots</li>";


// Adding element using the DOM Manipulation
let newEl = document.createElement('li');
let newListItem = document.createTextNode('Quinoa');
newEl.appendChild(newListItem);

list[0].appendChild(newEl);

// Removing elements via DOM Manipulation
let removeEl = document.getElementById("four");
let parentEl = removeEl.parentNode;
parentEl.removeChild(removeEl);

// Working with attributes
let listItems = document.getElementsByTagName("li");
// listItems[listItems.length - 1].className = 'cool';
listItems[listItems.length - 1].setAttribute("class", "cool");