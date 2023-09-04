const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const lblCashGiven = document.querySelector("#lbl-cash-given");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const changeTable = document.querySelector("#change-table");


hideMessage();
const avialableNotes = [500,200,100,50,20,10,5,2,1];

nextButton.addEventListener("click",function nextButtonHandler(){
    showCashGivenCheckBtn();
});


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    showChangeTable();
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

    cashGiven.style.display = "none";
    lblCashGiven.style.display = "none";

    checkButton.style.display = "none";
    changeTable.style.display = "none";
}

function showCashGivenCheckBtn(){
    cashGiven.style.display = "block";
    lblCashGiven.style.display = "block";

    checkButton.style.display = "block";
}

function showChangeTable(){
    changeTable.style.display = "table";
}


function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
    
}
