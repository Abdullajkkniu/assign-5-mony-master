function updateBalance(){
    
}

document.getElementById('calculate-amount').addEventListener('click',function(){
    const incomeAmount=document.getElementById('income-amount');
    let incomeValue = incomeAmount.value;
    const foodAmount = document.getElementById('food-amount');
    let foodValue = foodAmount.value;
    const rentAmount = document.getElementById('rent-amount');
    let rentValue = rentAmount.value;
    const clothAmount = document.getElementById('cloth-amount');
    let clothValue = clothAmount.value;
    const totalExpAmount = document.getElementById('totalExp-amount');
    const totalCost= totalExpAmount.innerText=parseInt(foodValue)+parseInt(rentValue)+parseInt(clothValue);
    const balanceAmount = document.getElementById('balance-amount');

    balanceAmount.innerText=incomeValue-totalCost;

})
document.getElementById('save-income').addEventListener('click', function(){
    const incomeAmount=document.getElementById('income-amount');
    let incomeValue = incomeAmount.value;
    const saveParcentage = document.getElementById('save-percentage');
     let saveValue = saveParcentage.value;
     const savingAmount = document.getElementById('saving-amount');
     savingAmount.innerText = incomeValue*(saveValue/100);

})