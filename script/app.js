function updateBalance() {
    const incomeAmount = document.getElementById('income-amount');
    let incomeValue = incomeAmount.value;
    
}
function anotherFunction(){
    const incomeAmount = document.getElementById('income-amount');
    let incomeValue = incomeAmount.value;
const foodAmount = document.getElementById('food-amount');
    let foodValue = foodAmount.value;
    const rentAmount = document.getElementById('rent-amount');
    let rentValue = rentAmount.value;
    const clothAmount = document.getElementById('cloth-amount');
    let clothValue = clothAmount.value;
    const totalExpAmount = document.getElementById('totalExp-amount');
    const totalCost = totalExpAmount.innerText = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothValue);
    const balanceAmount = document.getElementById('balance-amount');

    let newBalance = balanceAmount.innerText = incomeValue - totalCost;

    const saveParcentage = document.getElementById('save-percentage');
    let saveValue = saveParcentage.value;
    const savingAmount = document.getElementById('saving-amount');
    let newSaveValue = savingAmount.innerText = incomeValue * (saveValue / 100);
    const remainAmount = document.getElementById('remain-amount');
    let remainText = remainAmount.innerText;
    remainAmount.innerText = newBalance-newSaveValue;
    const mainerrors = document.getElementById('main-error')
    const savingAmountError = document.getElementById('savingAmont-error');
    if(incomeValue<0 || foodValue<0 || rentValue<0 || clothValue<0 ||totalCost>incomeValue){
        mainerrors.style.display="block";
        incomeAmount.value='0';
        foodAmount.value='0';
        rentAmount.value='0';
        clothAmount.value='0';
        remainAmount.innerText = '0';
        totalExpAmount.innerText='0';
        balanceAmount.innerText = '0';
    }
    else if(newSaveValue>newBalance){
       savingAmountError.style.display = 'block';
       savingAmount.innerText = '';
       remainAmount.innerText = '';

    }
    else{
        savingAmount.innerText = incomeValue * (saveValue / 100);
        savingAmountError.style.display = 'none';
    }

}
// ekhane 1ta function likhe uporer function a call kore dilei hobe

document.getElementById('calculate-amount').addEventListener('click', function () {
    anotherFunction();
})
document.getElementById('save-income').addEventListener('click', function () {
    anotherFunction()
    
})