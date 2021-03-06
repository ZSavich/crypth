var inputMessage = document.querySelector("#message");
var spanResult = document.querySelector("#result");
var spanResultKely = document.querySelector("#resultKely");
var btnCrypt = document.querySelector("#encrypt");

var getQ = function(key) {
	var keyArray = key.value.replace(/\s+/g,'').split('');

	var massOne = [];
	var massTwo = [];
	var totalArray = [];

	for(var i = 0; i < 3; i++) {
		massOne[i] = [];
		massTwo[i] = [];
		for(var j = 0; j < keyArray.length; j++) {
			massOne[i][j] = keyArray[j];
			if(i < 2) {
			  massTwo[i][j] = keyArray[j];
		  }
		}
		keyArray.push(keyArray[0]);
    keyArray.splice(0,1);
	}

	for(var l = 0; l < massOne.length; l++) {
		totalArray[l] = [];
    for(var k = 0; k < 2; k++) {
    	var count = 0;
      for(var p = 0; p < keyArray.length; p++) {
      	count += massOne[l][p] * massTwo[k][p];
      }
      totalArray[l][k] = count;
    }
	}
	
	return totalArray;
}

var getKely = function(key,modul) {
	var keyArray = key;
	var totalArray = [];
	for(var l = 0; l < keyArray.length; l++) {
		totalArray[l] = [];
    for(var k = 0; k < 2; k++) {
    	var count = 0;
    	count = keyArray[l][k] % modul;
      totalArray[l][k] = count;
    }
	}
	return totalArray;
}

var onButtonClick = function(evt) {
    evt.preventDefault();

    var keyQ = getQ(inputMessage);
    
    spanResult.innerHTML = "Matrix Q: <br>" + keyQ.join('<br>');
    spanResultKely.innerHTML = "GF(2): <br>" + getKely(keyQ,2).join('<br>') + "<br>GF(3): <br>" + getKely(keyQ,3).join('<br>') + "<br>GF(5): <br>" + getKely(keyQ,5).join('<br>') + "<br>GF(7): <br>" + getKely(keyQ,7).join('<br>');
};

btnCrypt.addEventListener("click", onButtonClick);