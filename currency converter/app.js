const baseUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`;

const dropdowns = document.querySelectorAll(".dropdown select");
const flags = document.querySelectorAll(".flag ");
const exchangeRate = document.querySelector(".exchange-rate span");
const btn = document.querySelector(".container-button button");
const amountBox = document.querySelector(".amount-box")
let rate, fromCurrency, toCurrency, amount = 1;

async function currencyRates(fromCurr, toCurr) {
    const response = await fetch(baseUrl);
    const rates = await response.json();
    let fromRate, toRate, ratio, finalRate;
    
    for(let curr in rates.eur){
        if(curr == fromCurr) {
            fromRate = rates.eur[curr];
        }
        if(curr == toCurr) {
            toRate = rates.eur[curr];
        }
    }
    ratio = 1 / fromRate;
    finalRate = ratio * toRate;
    return finalRate;
}

for(let curr in countryList){ 
    for(let dropdown of dropdowns){
        dropdown.innerHTML += `<option value="${countryList[curr]}">${curr}</option>`;
    }
}

amountBox.addEventListener("change", () => {
    amount = amountBox.value;
    if(amount == "") amount = 0;
});

window.addEventListener("DOMContentLoaded", () => {
        dropdowns.forEach((dropdown, idx) => {
            for(let curr in countryList){
            if(countryList[curr] == dropdown.value){
                if(idx == 0){
                    fromCurrency = curr.toLowerCase();
                }
                else {
                    toCurrency = curr.toLowerCase();
                }
            }
        }
        flags[idx].innerHTML = `<img src="https://flagsapi.com/${dropdown.value}/flat/32.png">`
        currencyRates(fromCurrency, toCurrency).then((res) => {
            rate = res.toFixed(3);
        });
        })
    })

dropdowns.forEach((dropdown, idx) => {
    dropdown.addEventListener("change", () => {
        for(let curr in countryList){
            if(countryList[curr] == dropdown.value){
                if(idx == 0){
                    fromCurrency = curr.toLowerCase();
                }
                else {
                    toCurrency = curr.toLowerCase();
                }
            }
        }
        flags[idx].innerHTML = `<img src="https://flagsapi.com/${dropdown.value}/flat/32.png">`
        currencyRates(fromCurrency, toCurrency).then((res) => {
            rate = res;
        });
    }) 
})

btn.addEventListener("click", () => {
    exchangeRate.innerHTML = `${amount} ${fromCurrency} = ${(rate * amount).toFixed(3)} ${toCurrency}`;
})




