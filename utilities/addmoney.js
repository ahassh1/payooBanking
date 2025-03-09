document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueById('amount');
    const pin = getInputValueById('pin')
    const account = document.getElementById('account').value;
    
    if(account.length ===11){
        if(pin===1234){

        }
        else{
            console.log('pin not valid')
        }
    }
    else{
        console.log('account number is not valid')
    }
})