
//Web version
const exchangeRates = [
    { code: "USD", rate: 1.137 },
    { code: "GBP", rate: 0.8598 }
];

document.getElementById("convert-btn").addEventListener("click", () => {
    
    const direction = Number(document.getElementById("direction").value);
    const currencyType = Number(document.getElementById("currency").value);
    const usersMoney = Number(document.getElementById("amount").value);
    const resultDisplay = document.getElementById("result-display");

    if (usersMoney <= 0 || isNaN(usersMoney)) {
        resultDisplay.textContent = "Please enter a valid positive number.";
        return;
    }

    const selectedCurrency = exchangeRates[currencyType - 1];
    
    if (direction === 1) {
        const converted = usersMoney * selectedCurrency.rate;
        resultDisplay.textContent = `${usersMoney.toFixed(2)} EUR = ${converted.toFixed(2)} ${selectedCurrency.code}`;
    } else if (direction === 2) {
        const converted = usersMoney / selectedCurrency.rate;
        resultDisplay.textContent = `${usersMoney.toFixed(2)} ${selectedCurrency.code} = ${converted.toFixed(2)} EUR`;
    }
});
