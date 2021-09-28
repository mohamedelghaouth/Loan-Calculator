const form = document.querySelector("#loanform");
const loanamount = document.querySelector("#loanamount");
const annualinterest = document.querySelector("#annualinterest");
const repayementyears = document.querySelector("#repayementyears");
const loan = document.querySelector("#loan");
const loader = document.querySelector("#loader");
const resultForm = document.querySelector("#result-form");



form.addEventListener("submit", calculate);

function calculate(e) {
    resultat = (parseFloat(loanamount.value) * parseFloat(annualinterest.value)) / parseFloat(repayementyears.value);
    resultForm.style.display = 'none';
    if(isNaN(parseFloat(loanamount.value))||isNaN(parseFloat(annualinterest.value))||isNaN(parseFloat(repayementyears.value))||!isFinite(resultat)){
        showError();
    } else {
        loader.style.display = 'block';
        setTimeout(function () {
            loader.style.display = 'none';
            resultForm.style.display = 'block';
        },3000);
        loan.value = resultat;
    }
    e.preventDefault();    
}

function showError(){
    let alertMsg = document.createElement("div")
    alertMsg.className = "alert alert-danger";
    alertMsg.role = "alert";
    alertMsg.appendChild(document.createTextNode("Check your numbers."));
    form.parentElement.insertBefore(alertMsg, form);
    setTimeout(function () {
        alertMsg.style.display = 'none';
    },3000);
    

}
