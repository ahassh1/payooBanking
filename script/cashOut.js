document.getElementById('cashOut-btn')
.addEventListener('click', function(event){
    event.preventDefault();

    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseFloat(amount);

    const mainBalence= document.getElementById('main-balence').innerText;
    const convertedMainBalence = parseFloat(mainBalence);

    if(convertedPin===1234){
         const sum = convertedMainBalence -convertedAmount;
         document.getElementById("main-balence").innerText = sum;
    }
    else{
        alert('enter valid pin')
    }
})