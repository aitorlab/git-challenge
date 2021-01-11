function bingo () {

    let bingoCard = [
        {number: 0, matched: false},
        {number: 0, matched: false},
        {number: 0, matched: false},
        {number: 0, matched: false},
        {number: 0, matched: false},
        // New line
        {number: 0, matched: false},
        {number: 0, matched: false},
        {number: 0, matched: false},
        {number: 0, matched: false},
        {number: 0, matched: false},
        // New Line
        {number: 0, matched: false},
        {number: 0, matched: false},
        {number: 0, matched: false},
        {number: 0, matched: false},
        {number: 0, matched: false},
    ];

    let randomNum;
    let found;
    let lineChecked = false;
    let numberOfTurns = 0;
    let userPuntuaction;

    const name = prompt('Welcome to Bingo!. Please, enter your name:');
    alert(
        `Mr./Ms. ${name}, the puntuaction system is: \n` +
        `- If you reach bingo in less than 200 turns, you get 1000 points \n` +
        `- If you reach bingo in less than 300 turns but more than 200 turns, you get 500 points \n` +
        `- If you reach bingo in less than 400 turns but more than 300 turns, you get 100 points \n` +
        `- If you reach bingo in more than 400 turns, you get 0 points`
        );

    function generateBingoCard() {  
        const nums = new Set();
        
        while(nums.size !== 15) {
            nums.add(Math.floor(Math.random() * 90) + 1);
        }

        const iterator = nums.values();
 
        for (let i = 0; i < bingoCard.length; i++) { 
            bingoCard[i].number = iterator.next().value;      
        } 
        
    }
  
    function firstTurn() {
        console.clear();
        generateBingoCard();
        printCard();

        let newCard = prompt('Are you happy with this card? Y/N');
        newCard = newCard.toUpperCase();

        if (newCard === 'NO' || newCard === 'N') {
            firstTurn();
        }

        const result = window.confirm('Do you want to play new turn?');
        

        if (result === true) {
            newTurn();
        } else {
            alert('Ciao!');
        }
        
    }
    
    function newTurn() {
        numberOfTurns++;
        generateRandomNumber(1, 90);
        found = bingoCard.find(function(card) {
            if (card.number === randomNum) {
                card.number = 'X';
                card.matched = true;
            }
        });
        
        console.clear();
        printCard();

        if (lineChecked === false) {checkLine();} 
        
        if(checkBingo()) {
            calculateUserPuntuaction();
            getRanking();
            return;
        } else {
            askNewTurn();
        }       
    }

    function printCard() {
        let cardLine1 = [];
        let cardLine2 = [];
        let cardLine3 = [];
        
        for (let i = 0; i < 5; i++) {
            cardLine1.push(bingoCard[i].number);
        }

        for (let i = 5; i < 10; i++) {
            cardLine2.push(bingoCard[i].number);
        }

        for (let i = 10; i < bingoCard.length; i++) {
            cardLine3.push(bingoCard[i].number);
        }


        console.log(cardLine1);
        console.log(cardLine2);
        console.log(cardLine3);
    }

    function generateRandomNumber(min, max) {
        randomNum = Math.random() * (max - min) + min;
        randomNum = Math.round(randomNum);
    }

    function askNewTurn() {
        const result = window.confirm('Do you want to play new turn?');
        

        if (result === true) {
            newTurn();
        } else {
            alert('Ciao!');
        }
    }

    function checkLine() {
        let checkedLine1 = [];
        let checkedLine2 = [];
        let checkedLine3 = [];
        const valueIsTrue = (currentValue) => currentValue === true;

        for (let i = 0; i < 5; i++) {
            checkedLine1.push(bingoCard[i].matched);
        }


        for (let i = 5; i < 10; i++) {
            checkedLine2.push(bingoCard[i].matched);
        }


        for (let i = 10; i < bingoCard.length; i++) {
            checkedLine3.push(bingoCard[i].matched);
        }

        if (checkedLine1.every(valueIsTrue)) {
            alert('Congratulations, you have reached a line!');
            lineChecked = true;

        } else if(checkedLine2.every(valueIsTrue)) {
            alert('Congratulations, you have reached a line!');
            lineChecked = true;

        } else if(checkedLine3.every(valueIsTrue)) {
            alert('Congratulations, you have reached a line!');
            lineChecked = true;
        } else {
            return;
        }
    }

    function checkBingo() {
        const valueIsTrue = (currentValue) => currentValue.matched === true;

        if (bingoCard.every(valueIsTrue)) {
            alert('Congratulations, you have reached a Bingo!');
            return true;
        } else {
            return;
        }
    } 

    function getRanking() {
        let rankingList = [
            {name: 'Jhon', puntuaction: 400},
            {name: 'Alice', puntuaction: 800}, 
            {name: 'Jack', puntuaction: 50},
            {name: 'Peter', puntuaction: 200},     
        ];

        rankingList.push({name: name, puntuaction: userPuntuaction});

        rankingList.sort(function(a, b) {
            return -(a.puntuaction - b.puntuaction);
        });
        console.log(numberOfTurns);
        console.table(rankingList);

    }

    function calculateUserPuntuaction() {
        if(numberOfTurns <= 200) {
            userPuntuaction = 1000;
        } else if(numberOfTurns <= 300 && numberOfTurns > 200) {
            userPuntuaction = 500;
        } else if(numberOfTurns <= 400 && numberOfTurns > 300) {
            userPuntuaction = 100;
        } else {
            userPuntuaction = 0;
        }
    }
   
    firstTurn();
}

bingo();