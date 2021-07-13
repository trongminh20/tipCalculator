function tipCal(price, percent){
  return price * (percent /100);
}

function total(price, tip){
  return parseInt(price) + parseInt(tip);
}

function btnHandle(clickedBtn){
  let tipPercent = clickedBtn.innerText.replace('%','');
  let price = document.getElementById('bill--price').value;
  let result = total(price,tipCal(price, tipPercent));
  document.getElementById('tip--amount').innerHTML = tipCal(price,tipPercent);
  document.getElementById('total--amount').innerHTML=result;
  console.log(clickedBtn.innerText); 
}

function reset(){
  document.getElementById('total--amount').innerHTML=" 0.00";
  document.getElementById('tip--amount').innerHTML= "0.00";
  document.getElementById('bill--price').value = 0;
}