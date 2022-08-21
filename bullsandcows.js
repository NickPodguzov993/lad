const getNum = new Array();
let numLength;
let check = true;

window.onload = function() {
    numLength = document.getElementById("select").value;
    setNumber();

}

/*Get random numbers
Numbers must not be the same as each other
(found this entire codeblock on the internet
and adapted it, not gonna lie)*/
function setNumber() {
    let random;
    getNum.splice(0, getNum.length);
    while (getNum.length < numLength) {
        random = Math.floor(Math.random() * 9) + 1;

        for (var i = 0; i < getNum.length; i++) {
            if (getNum[i] == random) {
                check = false;
                break;
            }
        }

        if (check) {
            getNum.push(random);
        }
        check = true;
    }
}

//Check user number
function checkUserText() {
    var userText = document.getElementById("userText").value;
    var setText = document.getElementById("textArea");
    //Check if userText is number
    for (var i = 0; i < userText.length; i++) {
        if (userText.charCodeAt(i) < 48 || userText.charCodeAt(i) > 57
            || userText.length != numLength) {
            setText.innerHTML += "Введи только" + numLength + " числа!\n";
            check = false;
            break;
        }
    }

    //Check Bull,Cow,Try Again
    var bull, cow;

    if (check) {
        bull = 0;
        cow = 0;

        for (var i = 0; i < getNum.length; i++) {
            for (var k = 0; k < userText.length; k++) {
                if ((getNum[i] == userText[k]) && (i == k)) {
                    bull++;
                } else if ((getNum[i] == userText[k]) && (i != k)) {
                    cow++;
                }
            }
        }

        if (bull == 0 && cow == 0) {
            setText.innerHTML += "Попробуй снова\n";
        } else if (bull == numLength) {
            setText.innerHTML += numLength + " Ты выиграл!!!\nнажми restart, чтобы сыграть еще раз \n";
        } else {
            setText.innerHTML += userText + " : ";
            setText.innerHTML += (bull + " быков, " + cow + " коров!\n");
        }
    }
    check = true;

}

//change difficulty
function difficulty() {
    numLength = document.getElementById("select").value;
    reload();
}

//restart game
function reload() {
    setNumber();
    document.getElementById("textArea").innerHTML = "";
}
