const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

hideMessage();
const avialableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    const billInput = parseInt(billAmount.value);
    const cashInput = parseInt(cashGiven.value);

    if(billInput > 0){
            if(cashInput >= billInput){
                const amountToBeReturnded = cashInput - billInput;
                calculateChange(amountToBeReturnded);
    
            } else {
                showMessage("The provided cash should atleast be equal to the bill amount");
            }
        }else{
            showMessage("Invalid Bill Amount");
        }

});


function calculateChange(amount){
    for(let i=0; i<avialableNotes.length; i++){
        const numberOfNotes = Math.trunc(amount / avialableNotes[i]);
        amount = amount % avialableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}


function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
    
}
