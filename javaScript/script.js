
const amountInvested = document.querySelector('[data-monthly-investment]')
const totalYears = document.querySelector('[data-years]')
const expectedReturnPercent = document.querySelector('[data-return-percent]')
const button = document.querySelector('[data-button]')

button.addEventListener('click', e =>{

    e.preventDefault()
    calculation()
})

function calculation(){

    const monthlyRate = expectedReturnPercent.value/100/12
    console.log(monthlyRate)
    const months = totalYears.value*12
    let futureValue = 0

    futureValue = amountInvested.value*(Math.pow(1+ monthlyRate,months)-1)/monthlyRate * (1+ monthlyRate)

    const amountTotalInvested = amountInvested.value*months
    const wealthGained = futureValue - amountTotalInvested

    document.getElementById("total-invested").innerHTML = Math.round(amountTotalInvested)
    document.getElementById("future-value").innerHTML = Math.round(futureValue)
    document.getElementById("wealth-gained").innerHTML = Math.round(wealthGained)

}


// var principal = 1000;
// var interestRate = 10 / 100/12;
// var periods = 12; 

// var futureValue = principal * (Math.pow(1 + interestRate, periods) - 1) / interestRate * (1 + interestRate);
// console.log(futureValue)