var btnSubmit = document.querySelector("#btn-submit");
var billAmt = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-given");
var changeReturn = document.querySelector("#change");
var changeData = [];


function clickEventHandler() {
    console.log("Clicked");
    var change = cashGiven.value - billAmt.value;
    countCurrency(change);
    console.log(changeData.length);
    for(let i =0; i<changeData.length;i++){
        if(changeData[i]){
            changeReturn.innerHTML += changeData[i] + "<br />";
        }
        
    }
        changeData = [];
  }
  

function countCurrency(amount) {
    let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
    let noteCounter = Array(9).fill(0);

    // count notes using Greedy approach
    for (let i = 0; i < 9; i++) {
        if (amount >= notes[i]) {
            noteCounter[i] = Math.floor(amount / notes[i]);
            amount = amount - noteCounter[i] * notes[i];
        }
    }

    // Prlet notes

    for (let i = 0; i < 9; i++) {
        if (noteCounter[i] != 0) {
            changeData[i] = (notes[i] + " : " +
                noteCounter[i]);
        }
    }
}

btnSubmit.addEventListener("click", clickEventHandler)