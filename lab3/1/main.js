var inputMessage = document.querySelector("#message");
var spanResult = document.querySelector("#result");
var spanResultP = document.querySelector("#resultP");
var spanResultObern = document.querySelector("#resultObern");
var spanResultDob = document.querySelector("#resultDobyt");
var spanResultObern2 = document.querySelector("#resultObern2");
var spanResultMatx = document.querySelector("#resultMatrix");
var btnCrypt = document.querySelector("#encrypt");

var MATRIX = ['1000000','0100000','0010000','0001000','0000010','0000100','0000001']

function sorting(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

var getSubstitution = function(key) {
    var keyArray = key.value.replace(/\s+/g,'').split('');
    var sourceKey = keyArray;
    var lastKey = [];
    for(var i = 0; i < keyArray.length; i++) {
        lastKey[i] = i+1;
    }
    var count = 1;
    do {
      sourceKey = operationSub(sourceKey, keyArray);
      count++;
    } while(sourceKey.join(' ') != lastKey.join(' '));
    spanResultP.innerText = "P: " + count;
};

var operationSub = function(key1, key2) {
    var myKey1 = key1;
    var myKey2 = key2;
    var totalKey = [];
    for(var i = 0; i < myKey1.length; i++) {
        totalKey[i] = myKey2[myKey1[i]-1];
    }
    return totalKey;
};

var getCycle = function(array) {
    var keyArray = array.value.replace(/\s+/g,'').split('');
    var lastKey;
    var totalResult = [];
    var totalString = [];
    var resultArray = [];
    var cyrclekey;
    var index = 0;
    for(var i = 0; i < keyArray.length; i++) {
    	var n = i;
    	var k = 0;
    	var mystring = [];
        do{
            lastKey = keyArray[i];
            var num = keyArray[n]-1;
            cyrclekey = keyArray[num];
            n = keyArray[n]-1;
            mystring[k] = cyrclekey;
            k++;
        }while(cyrclekey != lastKey)
        var canIClone = true;
        var two = mystring.join('');
        for(var j = 0; j < totalResult.length; j++) {
        	var oneSort = totalResult[j].join('');
        	var twoSort = mystring.sort(sorting).join('');

        	if(oneSort == twoSort) {
        		canIClone = false;
        		break;
        	}
        }
        if(canIClone) {
        	totalResult[index] = mystring;
          totalString[index] = two;
          index++;
        }
    }
    return totalString;
};

var getMatrix = function(key) {
    var keyArray = key.value.replace(/\s+/g,'').split('');
    var totalArray = [];
    for(var i = 0; i < keyArray.length; i++) {
    	var num = keyArray[i] - 1;
      totalArray[i] = MATRIX[num];
    }
    return totalArray;
};

var getObers = function(key) {
    var keyArray = key.value.replace(/\s+/g,'').split('');
    var numArray = [];
    for(var i = 0; i < keyArray.length; i++) {
      numArray[i] = i+1;
    }
    spanResultObern.innerText = keyArray.join(' ');
    spanResultObern2.innerText = numArray.join(' '); 
};

var onButtonClick = function(evt) {
    evt.preventDefault();
    
    getSubstitution(inputMessage);
    var keksik = getCycle(inputMessage);
    var matrix = getMatrix(inputMessage);
    getObers(inputMessage);
    spanResultDob.innerText = "Proceeds of cycles: " + keksik.join(' ');
    spanResultMatx.innerText = "Matrix: " + matrix.join(' ');
};

btnCrypt.addEventListener("click", onButtonClick);