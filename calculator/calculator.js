

function calculator() {
    
    alert(`
    Welcome to calculator. 
    If you want to perform operations please, enter two numbers. 
    If you want to calculate the square root of a number, 
    please enter only one number in any box.`);
    
    //Variable declaration
    const num1 = parseFloat(prompt('Enter the first value:'));
    const num2 = parseFloat(prompt('Enter the second value:'));
    let outputResults = [];
    
    /*Logic that performs the operations if the two values entered
      by the user are numbers and prints the results*/
    if(!isNaN(num1) && !isNaN(num2)) {

        let addition = num1 + num2;
        let subtraction = num1 - num2;
        let multiplication = num1 * num2;
        let division = num1 / num2;
        
        let results = [addition, subtraction, multiplication, division];

        for(i=0; i<results.length; i++) {
            if(!Number.isInteger(results[i])) {
                results[i] = results[i].toFixed(3);
            }
        }
        
        outputResults.push(`${num1} + ${num2} = ${results[0]}`, 
        `${num1} - ${num2} = ${results[1]}`,
        `${num1} * ${num2} = ${results[2]}`, 
        `${num1} / ${num2} = ${results[3]}`);

        for(i=0; i<outputResults.length; i++) {           
            console.log(outputResults[i]);   
        }
    
    /*Logic that calculates the square root of the first number
      or of the second number entered by the user*/
    }else if(!isNaN(num1) || !isNaN(num2)) {
        if(!isNaN(num1)) {
            let square = (Math.sqrt(num1));
            if(!Number.isInteger(square)) {
                square = square.toFixed(3);
            }
            console.log(`Square ${num1} = ${square}`);
        } else {
            let square = (Math.sqrt(num2));
            if(!Number.isInteger(square)) {
                square = square.toFixed(3);
            }
            console.log(`The square root of ${num2} = ${square}`);
        }
    } else {
    //logic that asks the user to enter numbers if it has not done so
    console.log('The entered values are incorrect. Please, enter numbers');
    }
}

calculator();