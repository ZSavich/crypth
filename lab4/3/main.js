var inputMessage = document.querySelector("#message");
var spanResult = document.querySelector("#result");
var btnCrypt = document.querySelector("#encrypt");

var onButtonClick = function(evt) {
    evt.preventDefault();
};

btnCrypt.addEventListener("click", onButtonClick);