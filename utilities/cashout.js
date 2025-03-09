document.getElementById('cashOut-btn')
.addEventListener('click', function(event){
  event.preventDefault();
  const accountNumber = document.getElementById
  ('account-number').value;
  const amount = getInputValueById('cashout-amount');
  const pinNumber = getInputValueById('cashout-pin');
  const mainBalence = getInnerTextByID('main-balence')
  if(accountNumber.length===11){
     if(pinNumber===1234){
         const sum = mainBalence - amount;
        setInnerTextByIDandValue('main-balence', sum)
    }
     else{
        alert('pin not matched')
     }
  }
  else{
    alert('account number is not valid')
  }
})