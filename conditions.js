// Fonction to trigger Start button and start calculation
const startCalculation = () => {
    
    // Get the user to prompt 2 numbers
    const userInput1 = prompt("Entrez votre premier nombre");
    const userInput2 = prompt("Entrez votre deuxième nombre");

    // Convert user's inputs into numbers with parse() method
    const number1 = parseInt(userInput1);
    const number2 = parseInt(userInput2);

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

    console.log( `${userInput1} x ${userInput2} = ${result}, ${sign}.`);
}

// Adding EventListener to start calculation once button is triggered
document.getElementById("btn-start").addEventListener("click", startCalculation);


