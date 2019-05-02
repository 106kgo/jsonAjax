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
animalContainer.insertAdjacentHTML('beforeend', 'testing 123');
}