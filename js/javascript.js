// points towards empty div to fill
let animalContainer = document.getElementById("animal-info");
// grabbing the button on the html
let btn = document.getElementById("btn");
// activates when button is clicked
btn.addEventListener("click", function(){
    // AJAX call getting info from another URL
    let ourRequest = new XMLHttpRequest();
    // location to URL
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    // grabbing specific data from URL
    ourRequest.onload = function(){
        // Pulling data and letting computer know to read in JSON format
        let ourData = JSON.parse(ourRequest.responseText);
        addHTML(ourData);
    };
    ourRequest.send();
});
// adding HTML the page
function addHTML(data){
    // variable to give a empty string, this is what will fill
    var htmlString = "";
    // grabbing something from EACH object in the array
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
    }

animalContainer.insertAdjacentHTML('beforeend', htmlString);
}