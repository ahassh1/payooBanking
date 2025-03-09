document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueById('amount');
    const pin = getInputValueById('pin')
    const account = document.getElementById('accout-number').value;
    const mainBalence = getInnerTextByID('main-balence');
    console.log(mainBalence)
    
    if(amount <= 0){
        alert('please give a number of amount');
        return;
    }
    
    if(account.length ===11){
        if(pin===1234){
              const sum = mainBalence + amount;
            //   document.getElementById('main-balence').innerText=sum;
              setInnerTextByIDandValue('main-balence',sum)

              const container= document.getElementById('transection-container')


              const div = document.createElement('div');
              div.classList.add('bg-red-400')

              div.innerHTML=`
              <h1 class='text-yellow-400'> Added Money form 
              ${selectedBank}</h1>

              <h3> ${amount} </h3>
              <p>account number: ${amount} </p>
              `

              container.appendChild(div)

        //    const container = document.getElementById('transection-history');
        //       const p =document.createElement('p');
        //       p.innerText = `
        //       added ${amount} from ${account} account`
        //       container.appendChild(p)
              }  
        else{
            console.log('pin not valid')
        }
    }
    else{
        console.log('account number is not valid')
    }
})
