const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
hideMessage();
const avialableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount(){
    if(billAmount.value > 0){
        console.log("1:",typeof(billAmount.value));
        console.log("2:",cashGiven.value);
        if(cashGiven.value >= billAmount.value){
            console.log("3:",billAmount.value);
            console.log("4:",cashGiven.value);
            const amountToBeReturnded = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturnded);

        } else {
            console.log("5:",billAmount.value);
            console.log("6:",cashGiven.value);
            showMessage("The provided cash should atleast be equal to the bill amount");
        }
    }else{
        console.log("7:",billAmount.value);
        console.log("8:",cashGiven.value);
        showMessage("Invalid Bill Amount");
    }
}

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
