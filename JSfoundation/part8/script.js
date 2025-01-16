//example 1
//most of the time, you'll be grabbing the event first

//html = markup language
//DOM = processed elements in document tree in memory

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

//example 2
// grab the button then within button, grab the next thing
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    console.log(citiesList);
    // firstElementChild gets the first list item.
    // classList gives all the class names of an element.
    citiesList.firstElementChild.classList.add("highlight");
  });

//example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  //we can add style too!
  coffeeType.style.backgroundColor = "purple";
  coffeeType.style.padding = "5px";
});

//example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  // I want to access the unordered list on click
  // I need a reference to "shoppingList" first.
  // I need to create an element as none exists yet.
  // Then i'll inject this into the shopping list
  // document also allows creating elements.
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  // this is a processed html, known as NODE in the memory
  // now i need to append this child (Eggs)

  let shoppingList = document
    .getElementById("shoppingList")
    .appendChild(newItem);
});

//example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    // Grab the ul id to manipulate the list
    // Store the taskList in a variable.
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//example 6
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("go to MDN reference more more");
});

//example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  //using target wil literally give me the target
  //console.log(event.target);
  // event.target.matches(".teaItem") -extra precaution-
  // If an item is clicked and matches teaItems, show an alert.
  // This ensures the alert is only shown when the correct item is clicked, not just any click.
  if (event.target && event.target.matches(".teaItem")) {
    // event.target.textContent gets the text content of the target.
    alert("You selected: " + event.target.textContent);
  }
});

// example 8
document
  .getElementById("feedbackForm")
  // Add an event listener to handle the "submit" event.
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior (e.g., page reload).
    // Retrieve the value entered in the feedback input field.
    let feedback = document.getElementById("feedbackInput").value;
    // Get the feedback display element and set its text content.
    let feedbackDisplayElement = document.getElementById("feedbackDisplay");
    feedbackDisplayElement.textContent = `Feedback is: ${feedback}`;

    // Style the feedback display element.
    feedbackDisplayElement.style.backgroundColor = "orange";
    feedbackDisplayElement.style.padding = "5px";
    feedbackDisplayElement.style.fontWeight = "bold";
    feedbackDisplayElement.style.color = "black";
  });

// example 9
// we can add event listener anywhere
// We put it on the document to listen for events there
// 'DOMContentLoaded': Let's do some fun stuff once the page is ready!
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    // Toggle the "highlight" class on descriptionText to add/remove highlight effect
    descriptionText.classList.toggle("highlight");
  });
