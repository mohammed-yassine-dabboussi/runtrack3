let showTextButton = document.querySelector("#show-text-button");
let hideTextButton = document.querySelector("#hide-text-button");
let text = document.querySelector("#text");

showTextButton.addEventListener("click", function() {
    $('p').show();
});

hideTextButton.addEventListener("click", function() {
    $('p').hide();
  });