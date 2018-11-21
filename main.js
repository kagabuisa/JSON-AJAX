var animal_container = document.getElementById("animal-info");
var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
    var our_request = new XMLHttpRequest();
    our_request.open('GET', 'https://learnwebcode.github.io/json-example/animals-3.json')
    our_request.onload = function () {
        var our_data = JSON.parse(our_request.responseText)
        renderHTML(our_data);
    };
    our_request.send();
});

function renderHTML(data) {
    var html_string = "";
    for (i = 0; i < data.length; i++) {
        html_string += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
    }

    animal_container.insertAdjacentHTML('beforeend', html_string);
}