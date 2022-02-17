function updateBalance() {
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

    balanceAmount.innerText = incomeValue - totalCost;
}
// ekhane 1ta function likhe uporer function a call kore dilei hobe

document.getElementById('calculate-amount').addEventListener('click', function () {
    updateBalance();
    // const incomeAmount=document.getElementById('income-amount');
    // let incomeValue = incomeAmount.value;
    // const foodAmount = document.getElementById('food-amount');
    // let foodValue = foodAmount.value;
    // const rentAmount = document.getElementById('rent-amount');
    // let rentValue = rentAmount.value;
    // const clothAmount = document.getElementById('cloth-amount');
    // let clothValue = clothAmount.value;
    // const totalExpAmount = document.getElementById('totalExp-amount');
    // const totalCost= totalExpAmount.innerText=parseInt(foodValue)+parseInt(rentValue)+parseInt(clothValue);
    // const balanceAmount = document.getElementById('balance-amount');

    // balanceAmount.innerText=incomeValue-totalCost;

})
document.getElementById('save-income').addEventListener('click', function () {
    const incomeAmount = document.getElementById('income-amount');
    let incomeValue = incomeAmount.value;
    const saveParcentage = document.getElementById('save-percentage');
    let saveValue = saveParcentage.value;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = incomeValue * (saveValue / 100);

})






// last modified
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

}
// ekhane 1ta function likhe uporer function a call kore dilei hobe

document.getElementById('calculate-amount').addEventListener('click', function () {
    anotherFunction();
    // const incomeAmount=document.getElementById('income-amount');
    // let incomeValue = incomeAmount.value;
    // const foodAmount = document.getElementById('food-amount');
    // let foodValue = foodAmount.value;
    // const rentAmount = document.getElementById('rent-amount');
    // let rentValue = rentAmount.value;
    // const clothAmount = document.getElementById('cloth-amount');
    // let clothValue = clothAmount.value;
    // const totalExpAmount = document.getElementById('totalExp-amount');
    // const totalCost= totalExpAmount.innerText=parseInt(foodValue)+parseInt(rentValue)+parseInt(clothValue);
    // const balanceAmount = document.getElementById('balance-amount');

    // balanceAmount.innerText=incomeValue-totalCost;

})
document.getElementById('save-income').addEventListener('click', function () {
    anotherFunction()
    // const incomeAmount = document.getElementById('income-amount');
    // let incomeValue = incomeAmount.value;
    // const saveParcentage = document.getElementById('save-percentage');
    // let saveValue = saveParcentage.value;
    // const savingAmount = document.getElementById('saving-amount');
    // savingAmount.innerText = incomeValue * (saveValue / 100);
    
})



// anothr commit
function updateBalance() {
    const incomeAmount = document.getElementById('income-amount');
    let incomeValue = incomeAmount.value;

}
function anotherFunction() {
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
    remainAmount.innerText = newBalance - newSaveValue;
    const mainerrors = document.getElementById('main-error')
    const savingAmountError = document.getElementById('savingAmont-error');
    if (isNaN(incomeValue || foodValue || rentValue || clothValue || saveValue)) {
        mainerrors.style.display = "block";
        incomeAmount.value = '';
        foodAmount.value = '';
        rentAmount.value = '';
        clothAmount.value = '';
        remainAmount.innerText = '';
        totalExpAmount.innerText = '';
        balanceAmount.innerText = '';
        savingAmount.innerText = ''
    }
    else if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothValue < 0 || newSaveValue < 0 || totalCost > incomeValue) {
        mainerrors.style.display = "block";
        incomeAmount.value = '';
        foodAmount.value = '';
        rentAmount.value = '';
        clothAmount.value = '';
        remainAmount.innerText = '';
        totalExpAmount.innerText = '';
        balanceAmount.innerText = '';
        savingAmount.innerText = '';

    }
    else if (newSaveValue > newBalance) {
        savingAmountError.style.display = 'block';
        savingAmount.innerText = '';
        remainAmount.innerText = '';

    }
    else {
        savingAmount.innerText = incomeValue * (saveValue / 100);
        savingAmountError.style.display = 'none';
    }
    // if(isNaN(number)){
    //     if(number == 'C'){
    //         calcInput.value = '';
    //     }

}
// ekhane 1ta function likhe uporer function a call kore dilei hobe

document.getElementById('calculate-amount').addEventListener('click', function () {
    anotherFunction();
})
document.getElementById('save-income').addEventListener('click', function () {
    anotherFunction()

})


// last updated
function updateBalance() {
    const incomeAmount = document.getElementById('income-amount');
    let incomeValue = parseInt(incomeAmount.value);
    const foodAmount = document.getElementById('food-amount');
    let foodValue = parseInt(foodAmount.value);
    const rentAmount = document.getElementById('rent-amount');
    let rentValue = parseInt(rentAmount.value);
    const clothAmount = document.getElementById('cloth-amount');
    let clothValue = parseInt(clothAmount.value);
    const totalExpAmount = document.getElementById('totalExp-amount');
    const totalCost = totalExpAmount.innerText = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothValue);
    const balanceAmount = document.getElementById('balance-amount');

    let newBalance = balanceAmount.innerText = incomeValue - totalCost;

    const saveParcentage = document.getElementById('save-percentage');
    let saveValue = parseInt(saveParcentage.value);
    const savingAmount = document.getElementById('saving-amount');
    let newSaveValue = savingAmount.innerText = incomeValue * (saveValue / 100);
    const remainAmount = document.getElementById('remain-amount');

    remainAmount.innerText = newBalance - newSaveValue;
    const savingAmountError = document.getElementById('savingAmont-error');
    
    if(isNaN(foodValue) || isNaN(clothValue) || isNaN(rentValue) || isNaN(incomeValue)){
        remainAmount.innerText = '';
        totalExpAmount.innerText = '';
        balanceAmount.innerText = '';
        saveParcentage.value = '';
        savingAmount.innerText='';
        alert('Please enter a valid number');
        }
    else if(incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothValue < 0 || newSaveValue < 0 || totalCost > incomeValue){
        alert('Please enter a valid number');
        
    }
    else if (newSaveValue > newBalance) {
        savingAmountError.style.display = 'block';
        savingAmount.innerText = '';
        remainAmount.innerText = '';

    }
    else {
        savingAmount.innerText = incomeValue * (saveValue / 100);
        savingAmountError.style.display = 'none';
    }
}
// event listener start
document.getElementById('calculate-amount').addEventListener('click', function () {
    updateBalance();
})
document.getElementById('save-income').addEventListener('click', function () {
    updateBalance()

})