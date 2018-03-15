var inputKeyA = document.querySelector("#keyA");
var inputKeyB = document.querySelector("#keyB");
var inputKeyM = document.querySelector("#keyM");
var spanResult = document.querySelector("#result");
var spanResultEvklida = document.querySelector("#resultOne");
var btnCrypt = document.querySelector("#encrypt");

var getTotal = function(a,b,m) {
	var keyA = a.value.replace(/\s+/g,'');
	var keyB = b.value.replace(/\s+/g,'');
	var keyM = m.value.replace(/\s+/g,'');

  var keyR = getEvklida(keyM, keyA);

  var result = keyM/keyR;
  var keyK = keyA;
  var totalString = "";
  while(parseInt(keyK, 10) <= parseInt(keyM, 10)) {
    totalString += "K(" + keyM + ")" + keyK + ", ";
    keyK = parseInt(keyK, 10) + parseInt(result, 10);
  }

  spanResult.innerText = totalString;
}

var getEvklida = function(a, b) {
	var KeyA = a;
	var KeyB = b;
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
	var nsk = a * b / evklidArray[evklidArray.length-2];
	spanResultEvklida.innerHTML = "NOD: " + evklidArray[evklidArray.length-2] + "<br>u: " + arrayU[arrayU.length-2] + "<br>v: " + arrayV[arrayV.length-2];
	return evklidArray[evklidArray.length-2];
}

var onButtonClick = function(evt) {
    evt.preventDefault();
    getTotal(inputKeyA,inputKeyB,inputKeyM);
};

btnCrypt.addEventListener("click", onButtonClick);