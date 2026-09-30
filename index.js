// EUR/USD: 1 EUR ≈ 1.137 USD (Sep 23, 2026)
// EUR/GBP: 1 EUR ≈ 0.8598 GBP (Sep 23, 2026)
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function currencyExchange() {
    const rl = readline.createInterface({ input, output });

    // Base currency is EUR. Rates are relative to 1 EUR.
    const exchangeRates = [
        { code: "USD", rate: 1.137 },
        { code: "GBP", rate: 0.8598 }
    ];

    // 1. starting program ui screen
    const directionInput = await rl.question(
        "Select conversion direction:\n1. EUR to Foreign Currency\n2. Foreign Currency to EUR\n3. Quit\n> "
    );
    

    const direction = Number(directionInput.trim());

    if (direction === 3 || directionInput.trim().toUpperCase() === "QUIT") {
        console.log("Quitting. Goodbye.");
        rl.close();
        return;
    }

    if (direction !== 1 && direction !== 2) {
        console.log("Invalid selection. Please choose 1, 2, or 3.");
        rl.close();
        return;
    }

    // 2. lets select the foreign currency
    const currencyInput = await rl.question(
        "\nSelect the foreign currency:\n1. USD\n2. GBP\n3. Quit\n> "
    );
    const selection = currencyInput.trim().toUpperCase();
    const currencyType = selection === "USD" ? 1 : selection === "GBP" ? 2 : Number(selection);

    if (selection === "QUIT" || currencyType === 3) {
        console.log("Quitting. Goodbye.");
        rl.close();
        return;
    }

    if (currencyType < 1 || currencyType > exchangeRates.length || isNaN(currencyType)) {
        console.log("Invalid currency selection.");
        rl.close();
        return;
    }

    const selectedCurrency = exchangeRates[currencyType - 1];

    // 3. we will get our amount and convert it
    if (direction === 1) {
        // conver EUR to foreign
        const moneyInput = await rl.question(`\nHow much EUR do you want to convert to ${selectedCurrency.code}?\n> `);
        const usersMoney = Number(moneyInput);

        if (usersMoney <= 0 || isNaN(usersMoney)) {
            console.log("Please enter a valid positive number.");
        } else {
            const converted = usersMoney * selectedCurrency.rate;
            console.log(`\n${usersMoney.toFixed(2)} EUR = ${converted.toFixed(2)} ${selectedCurrency.code}`);
        }
    } else if (direction === 2) {
        // conver foreign to EUR
        const moneyInput = await rl.question(`\nHow much ${selectedCurrency.code} do you want to convert to EUR?\n> `);
        const usersMoney = Number(moneyInput);

        if (usersMoney <= 0 || isNaN(usersMoney)) {
            console.log("Please enter a valid positive number.");
        } else {
            // BACKWARDS CONVERSION: divides the foreign amount by the standard rate :p
            const converted = usersMoney / selectedCurrency.rate;
            console.log(`\n${usersMoney.toFixed(2)} ${selectedCurrency.code} = ${converted.toFixed(2)} EUR`);
        }
    }

    rl.close();
}

currencyExchange();
