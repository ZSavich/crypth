var inputKeyA = document.querySelector("#keyA");
var inputKeyB = document.querySelector("#keyB");
var spanResultEvklida = document.querySelector("#resultOne");
var spanResult = document.querySelector("#result");
var btnCrypt = document.querySelector("#encrypt");

var getDivision = function(a,b) {
	var KeyA = a.value.replace(/\s+/g,'');
	var KeyB = b.value.replace(/\s+/g,'');
	var evklidArray = [];
	var result = KeyB;
	var arrayU = [1,0];
	var arrayV = [0,1];
	var count = 0;
	do {
		KeyB = result;
		var sum = Math.floor(KeyA/result)
    result = KeyA-result*sum;
    arrayU[count+2] = arrayU[count] - (arrayU[count+1]*sum);
    arrayV[count+2] = arrayV[count] - (arrayV[count+1]*sum);
    evklidArray[count] = result;
    KeyA = KeyB;
    count++;
	}while(result != 0)
	var nsk = a.value.replace(/\s+/g,'') * b.value.replace(/\s+/g,'') / evklidArray[evklidArray.length-2];
	spanResultEvklida.innerHTML = "NOD: " + evklidArray[evklidArray.length-2] + "<br>u: " + arrayU[arrayU.length-2] + "<br>v: " + arrayV[arrayV.length-2];
	spanResult.innerText = "NSK: " + nsk;
}

var onButtonClick = function(evt) {
    evt.preventDefault();
    getDivision(inputKeyA,inputKeyB);
};

btnCrypt.addEventListener("click", onButtonClick);