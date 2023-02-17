document.getElementById('withdraw-btn').addEventListener('click', function(){
    const depositField = getInputField('withdraw-field');
    const depositTotal = getTotalField('withdraw-total');
    const totalBlance = getTotalField('total-Blance');
    console.log(totalBlance)

    const totalDeposit = document.getElementById('withdraw-total');

    const depositTotalAmmount = depositField + depositTotal;
    if(isNaN(depositTotalAmmount)){
        return
    }
    else{
        totalDeposit.innerText = depositTotalAmmount;
    }

    const totalBlanceAmmount = document.getElementById('total-Blance');
    const finalTotal = totalBlance -  depositField ;
    if(isNaN(finalTotal)){
        return
    }
    else if(depositField > finalTotal){
        return alert ("no found")
    }
    else{
        totalBlanceAmmount.innerText = finalTotal

    }

})