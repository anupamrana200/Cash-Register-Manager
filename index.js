const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    message.style.display = "none";
    if(billAmount.value >0){

    }else{
        message.style.display = "block";
        message.innerText = "The Bill Amount Should be greater than 0";
    }
} );
