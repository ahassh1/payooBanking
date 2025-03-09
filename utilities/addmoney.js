document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueById('amount');
    const pin = getInputValueById('pin')
    const account = document.getElementById('accout-number').value;
    const mainBalence = getInnerTextByID('main-balence');
    console.log(mainBalence)
    
    if(account.length ===11){
        if(pin===1234){
              const sum = mainBalence + amount;
            //   document.getElementById('main-balence').innerText=sum;
              setInnerTextByIDandValue('main-balence',sum)

           const container = document.getElementById('transection-history');
              const p =document.createElement('p');
              p.innerText = `
              added ${amount} from ${account} account`
              container.appendChild(p)
              }  
        else{
            console.log('pin not valid')
        }
    }
    else{
        console.log('account number is not valid')
    }
})
