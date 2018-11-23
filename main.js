var page_counter = 1
var animal_container = document.getElementById("animal-info");
var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
    var our_request = new XMLHttpRequest();
    our_request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + page_counter + '.json')
    our_request.onload = function () {
        var our_data = JSON.parse(our_request.responseText)
        renderHTML(our_data);
    };
    our_request.send();
    page_counter++;
    if (page_counter > 3) {
        btn.classList.add("hide-me")
    }
});

function renderHTML(Kagabu) {
    var html_string = "";
    for (i = 0; i < Kagabu.length; i++) {
        html_string += "<p>" + Kagabu[i].name + " is a " + Kagabu[i].species + " that like to eat ";
        for (ii = 0; ii < Kagabu[i].foods.likes.length; ii++) {
            if (ii == 0) {
                html_string += Kagabu[i].foods.likes[ii];

            } else {
                html_string += " and " + Kagabu[i].foods.likes[ii];

            }

        }
        html_string += ' but dislikes ';
        for (ii = 0; ii < Kagabu[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                html_string += Kagabu[i].foods.dislikes[ii];

            } else {
                html_string += " and " + Kagabu[i].foods.dislikes[ii];
                console.log(html_string)

            }

        }
        html_string += '.</p>';
    }

    animal_container.insertAdjacentHTML('beforeend', html_string);
}