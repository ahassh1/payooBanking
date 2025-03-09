function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value)
    console.log(convertedValue);
}

function setInnerTextByIDandValue(id, value){
    // console.log(id, value)
    document.getElementById(id).innerText = value;
}