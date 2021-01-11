function calculator() {
    
    //Variables declared at function calculator() scope
    let numbersArray = [];
    let outputResults = [];

    // saveNumbers() function manages the user inputs
    function saveNumbers() {
        let totalNumbers = prompt(`   
            Enter the total numbers to perform calculations
            or enter only one nummber in the first box to calculate 
            its square root`);
        
        if(isNaN(totalNumbers)) {
            alert('Calculator only accept numeric values.');
            saveNumbers();

        } else if(totalNumbers === undefined) {
            return;

        } else {
        
            totalNumbers = parseInt(totalNumbers);
        
            for(i=0; i<totalNumbers; i++) {
                let number = prompt('Enter a number');
                if(isNaN(number)) {
                    alert('Calculator only accept numeric values.');
                    numbersArray.length = 0;
                    saveNumbers();
                } else {
                number = parseFloat(number);
                numbersArray.push(number); 
                }   
            }
        }   
    }

    // calculate() function performs the requested calculation

    function calculate(){    
        if(numbersArray.length === 1) {
            let square = (Math.sqrt(numbersArray[0]));
            if(!Number.isInteger(square)) {
                square = square.toFixed(3);
            }
            console.log(`Square ${numbersArray[0]} = ${square}`);
        
        } else if(numbersArray.length === 0) {
            return;
            
        } else {
            function addition(){
                let result = numbersArray[0];
                for(i=1; i<numbersArray.length; i++) {  
                    result += numbersArray[i];   
                }      
                return result;
            }    

            function subtraction(){
                let result = numbersArray[0];
                for(i=1; i<numbersArray.length; i++) {   
                    result -= numbersArray[i];   
                }
                return result;  
            }

            function multiplication() {
                let result = numbersArray[0];
                for(i=0; i<numbersArray.length; i++) {
                    result *= numbersArray[i];   
                }   
                return result;
            }

            function division() {
                let result = numbersArray[0];
                for(i=0; i<numbersArray.length; i++) {
                    result /= numbersArray[i];           
                }
                return result;
            } 
        
            let results = [addition(), subtraction(), multiplication(), division()];
    
            for(i=0; i<results.length; i++) {
                if(!Number.isInteger(results[i])) {
                    results[i] = results[i].toFixed(3);
                }
            }

            outputResults.push(
                `Addittion = ${results[0]}`, 
                `Subtraction = ${results[1]}`,
                `Multiplication = ${results[2]}`, 
                `Division = ${results[3]}`);
        }
    } 
    
    /* printResults() function prints the results and
    asks the user if it wants to perform  a new calculation*/ 
    
    function printResults() {
        for(i=0; i<outputResults.length; i++) {           
            console.log(outputResults[i]);   
        }

        function finalQuestion() {
            let answer = prompt('Would you like to perform a new calculation? y/n');
            
            if(answer === undefined || answer === null) {
                alert('Good bye');
                return;
            } else {
                answer = answer.toLowerCase();
                switch(answer) {
                    case 'yes':
                        calculator();
                        break;
                    case 'y':
                        calculator();
                        break;
                    case 'no':
                        alert('Good bye');
                        break;
                    case 'n':
                        alert('Good bye');
                        break;
                    default: 
                        alert('The answer only can be: "yes", "no", "y" or "n"');
                        finalQuestion();          
                }
            }
        }

        finalQuestion();
    }

    saveNumbers();
    calculate();
    printResults();
      
}
calculator();