document.getElementById('cashOut').style.display='none';

document.getElementById('add-money-box').addEventListener
('click', function(){
    handleToggle('addMoney', 'block');
    handleToggle('cashOut', 'none')
    handleToggle('transection-history', 'none')
    //    document.getElementById('addMoney').style.display='block';
    //    document.getElementById('cashOut').style.display='none';
})
 document.getElementById('cash-out-box').addEventListener('click', function(){
    handleToggle('addMoney', 'none');
    handleToggle('cashOut', 'block')
    handleToggle('transection-history', 'none')
 })
function handleToggle(id, status){
    document.getElementById(id).style.display=status;
}