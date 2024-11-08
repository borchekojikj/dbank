import {dbank} from "../../declarations/dbank"

window.addEventListener("load", async function(){
  update();
})


document.querySelector('form').addEventListener('submit', async (e)=>{
  e.preventDefault();

  const button = e.target.querySelector("#submit-btn");
  const inputAmount = parseFloat(document.getElementById('input-amount').value);
  const outputAmount =   parseFloat(document.getElementById('withdrawal-amount').value);

  button.setAttribute("disabled", true);

  if(document.getElementById('input-amount').value.length != 0){
    await dbank.topUp(inputAmount);
  }

  if(document.getElementById('withdrawal-amount').value.length != 0){
    await dbank.withdrawl(outputAmount);
  }

  await dbank.compound();
  update();
  document.getElementById('input-amount').value = "";
  document.getElementById('withdrawal-amount').value = "";


  button.removeAttribute("disabled");
})

async function update(){
  const currentAmount = await dbank.checkBalanc();
  document.getElementById('value').innerText = currentAmount.toFixed(2);
}