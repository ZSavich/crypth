var inputC1 = document.querySelector("#c1");
var inputC2 = document.querySelector("#c2");
var inputC3 = document.querySelector("#c3");
var inputM1 = document.querySelector("#m1");
var inputM2 = document.querySelector("#m2");
var inputM3 = document.querySelector("#m3");
var spanResultEvklida = document.querySelector("#resultEvklida");
var spanResult = document.querySelector("#result");
var btnCrypt = document.querySelector("#encrypt");

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
	spanResultEvklida.innerHTML += a + " * " + arrayU[arrayU.length-2] + " + " + b + " * " + arrayV[arrayV.length-2] + " = 1<br>";
	return arrayU[arrayU.length-2];
}

var getChinaRemains = function() {
	var c1 = inputC1.value;
	var c2 = inputC2.value;
	var c3 = inputC3.value;
	var m1 = inputM1.value;
	var m2 = inputM2.value;
	var m3 = inputM3.value;

  var M = m1 * m2 * m3;
	var M1 = m2 * m3;
	var M2 = m1 * m3;
	var M3 = m1 * m2;

	var M1up = getEvklida(M1,m1);
	var M2up = getEvklida(M2,m2);
	var M3up = getEvklida(M3,m3);

	var result = M1 * M1up * c1 + M2 * M2up * c2 + M3 * M3up * c3;
	while(result > M) {
		result -= M;
	}
  
  spanResult.innerText = "(" + M1 + " * " + M1up + " * " + c1 + " + "  + M2 + " * " + M2up + " * " + c2 + " + "  + M3 + " * " + M3up + " * " + c3 + ")(mod" + M + ") = " +  result + "(mod" + M + ")";
}

var onButtonClick = function(evt) {
    evt.preventDefault();

    getChinaRemains();
};

btnCrypt.addEventListener("click", onButtonClick);