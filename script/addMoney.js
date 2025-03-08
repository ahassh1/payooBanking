document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const amount = document.getElementById("amount").value ;
    const convertedAmount = parseFloat(amount);

    const pin =document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

   const mainBalence = document.getElementById
   ('main-balence').innerText;
   const  convertedMainBalence = parseFloat(mainBalence);

    if(convertedPin===1234){
       const sum = convertedMainBalence + convertedAmount;
       document.getElementById('main-balence').innerText= sum;
    }
    else{
        console.log('pin is not valid')
    }
})