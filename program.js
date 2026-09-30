
//new web version as i did it in terminal D:
const exchangeRates = [
    { code: "USD", rate: 1.137 },
    { code: "GBP", rate: 0.8598 }
];
//array of exchange rates

document.getElementById("convert-btn").addEventListener("click", () => {
    
    //variables defined with getelement 
    const direction = Number(document.getElementById("direction").value);
    const currencyType = Number(document.getElementById("currency").value);
    const usersMoney = Number(document.getElementById("amount").value);
    const resultDisplay = document.getElementById("result-display");
    const strengthDisplay = document.getElementById("strength-display");

    if (usersMoney <= 0 || isNaN(usersMoney)) {
        resultDisplay.textContent = "Please enter a valid positive number.";
        strengthDisplay.textContent = "";
        return;
    }

    const selectedCurrency = exchangeRates[currencyType - 1];
    let strengthMessage = "";

    // rates are foreign currency units per EUR, so compare the selected currency with EUR.
    if (selectedCurrency.rate > 1) {
        strengthMessage = `${selectedCurrency.code} is weaker than EUR.`;
    } else if (selectedCurrency.rate < 1) {
        strengthMessage = `${selectedCurrency.code} is stronger than EUR.`;
    } else {
        strengthMessage = `${selectedCurrency.code} is equal to EUR.`;
    }
    
    // if the direction is 1, convert euros to the selected foreign currency.
    if (direction === 1) {
        // multiplies by the rate to find the foreign-currency amount.
        const converted = usersMoney * selectedCurrency.rate;
        resultDisplay.textContent = `${usersMoney.toFixed(2)} EUR = ${converted.toFixed(2)} ${selectedCurrency.code}`;
    } else if (direction === 2) {
        // divides by the rate to convert the foreign currency amount back to euros.
        const converted = usersMoney / selectedCurrency.rate;
        resultDisplay.textContent = `${usersMoney.toFixed(2)} ${selectedCurrency.code} = ${converted.toFixed(2)} EUR`;
    }

    strengthDisplay.textContent = strengthMessage;
});
