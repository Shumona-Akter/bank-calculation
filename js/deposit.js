document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = getInputField('deposid-field');
    const depositTotal = getTotalField('deposit-total');
    const totalBlance = getTotalField('total-Blance');
    console.log(totalBlance)

    const totalDeposit = document.getElementById('deposit-total');

    const depositTotalAmmount = depositField + depositTotal;
    if(isNaN(depositTotalAmmount)){
        return
    }
    else{
        totalDeposit.innerText = depositTotalAmmount;
    }

    const totalBlanceAmmount = document.getElementById('total-Blance');
    const finalTotal = depositField + totalBlance;
    if(isNaN(finalTotal)){
        return
    }
    else{
        totalBlanceAmmount.innerText = finalTotal

    }

})