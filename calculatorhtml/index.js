//get elements from DOM
const buttons = document.querySelectorAll(".number, .operator");
const display = document.querySelector('.display');
const equalsButton = document.querySelector('.result');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
let displayData = "";
let deletedData = "";

function calculator() {

    //Iterate through buttons and uodate the display
    function clickOnButtons() {
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
            let buttonValue = button.getAttribute('value');
                displayData += buttonValue;
                display.textContent = displayData;
            });
        });
    }

    // Logic that manages the click on the equal button
    function clickOnEqualButton() {
        equalsButton.addEventListener('click', () => {
            displayData = eval(displayData);
            display.textContent = displayData;
            document.getElementById('del').disabled = true;
        });
    }

    // Logic that manages the click on the delete button
    function clickOnDeleteButton() {
        deleteButton.addEventListener('click', () => {
            deletedData = displayData.slice(0, -1);
            displayData = deletedData;
            display.textContent = displayData;   
        });
    }

    // logic that manages the click on the clear button
    function clickOnClearButton() {
        clearButton.addEventListener('click', () => {
            displayData = "0";
            display.textContent = displayData;
            displayData = "";
            document.getElementById('del').disabled = false;
        });
    }

    clickOnButtons();
    clickOnEqualButton();
    clickOnDeleteButton();
    clickOnClearButton();
}

calculator();



