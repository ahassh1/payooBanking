document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accoutNumber = document.getElementById("accout-number").value;
    const pin = document.getElementById("pin").value;
    const convartedPin = parseInt(pin);
    // console.log(accoutNumber, pinNumber);
    if (accoutNumber.length === 11) {
      if (convartedPin === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("pin thik nai");
      } 
    } else {
      alert("need to valid account number");
    }
  });
