var button = document.getElementById("button");
var article = document.createElement("article");
var text = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
article.appendChild(text);

function showhide() {
    if(article.parentNode === null) {
        document.body.appendChild(article);
    } else {
        article.parentNode.removeChild(article);
    }
}

button.addEventListener("click", showhide);