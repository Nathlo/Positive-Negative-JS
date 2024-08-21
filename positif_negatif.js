// Function to trigger Start button and start calculation
const startCalculation = () => {
    
    // Catch the number's value typed in the inputs by the user
    const userInput1 = document.getElementById("number1").value;
    const userInput2 = document.getElementById("number2").value;

    // Convert user's inputs into numbers with parse() method
    const number1 = parseInt(userInput1);
    const number2 = parseInt(userInput2);

    // Check the user's inputs are valid
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").innerText = "Veuillez entrer deux nombres valides.";
        return;
    }

    // Catch the calcul result of the 2 numbers
    const result = number1 * number2;

    // Undefined variable to determine the result sign (positive or negative)
    let sign;

        // Determine if result is positive, negative or not a number (NaN)
        if ( isNaN(result) ) {
            console.log(`Cette opération est impossible : ${userInput1} x ${userInput2}`);
        } else if (result > 0) {
            sign = "Votre résultat est positif";
        } else if (result < 0) {
            sign = "Votre résultat est négatif";
        } else {
            sign = "Votre résultat est zéro"
        }

    document.getElementById("result").innerText = `${userInput1} x ${userInput2} = ${result}, ${sign}.`;
}

// Function to reset inputs for new calculation
const resetCalculation = () => {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result").innerText = "";
}

// Adding EvenListenners to trigger buttons on click
document.getElementById("btn-start").addEventListener("click", startCalculation);
document.getElementById("btn-reset").addEventListener("click", resetCalculation);


