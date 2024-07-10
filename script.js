function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;

    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }
    
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
        
    caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
}


function getInputvalue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputvalue('clothe1') * 12;
    const caseTotal = getInputvalue('clothe2') * 13;
    const totalPrice = phoneTotal + caseTotal;

    // update on the html 
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('clothe1-plus').addEventListener('click',function(){
    upadateCaseNumber('clothe1',12, true);
});

document.getElementById('clothe1-minus').addEventListener('click',function(){
    upadateCaseNumber('clothe1',12 , false);
});

document.getElementById('clothe2-plus').addEventListener('click',function(){
   upadateCaseNumber('clothe2', 13 ,true);
});

document.getElementById('clothe2-minus').addEventListener('click',function(){
    upadateCaseNumber('clothe2', 13, false);
});

