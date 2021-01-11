let questions = [

    { idNumber: 0, letter: "A", answer: "AMENAZA", status: 0, question: "CON LA A. Cosa o persona que constituye una posible causa de riesgo o perjuicio para alguien o algo"},

    { idNumber: 1, letter: "B", answer: "BOOTSTRAP", status: 0, question: "CON LA B. Conocido framework CSS de código abierto"},

    { idNumber: 2, letter: "C", answer: "COCTEL", status: 0, question: "CON LA C. Bebida alcohólica que se prepara mezclando licores con jugos u otros ingredientes"},

    { idNumber: 3, letter: "D", answer: "DEDAL", status: 0, question: "CON LA D. Utensilio de costura que se ajusta al extremo del dedo"},

    { idNumber: 4, letter: "E", answer: "ECTOPLASMA", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    
    { idNumber: 5, letter: "F", answer: "FRUSTRACION", status: 0, question: "CON LA F. Imposibilidad de satisfacer una necesidad o un deseo"},

    { idNumber: 6, letter: "G", answer: "GALAXIA", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},

    { idNumber: 7, letter: "H", answer: "HEROKU", status: 0, question: "CON LA H. Conocida plataforma de hosting que soporta distintos lenguajes de programación"},

    { idNumber: 8, letter: "I", answer: "INTERNET", status: 0, question: "CON LA I. Red informática de nivel mundial que utiliza la línea telefónica para transmitir la información"},

    { idNumber: 9, letter: "J", answer: "JOROBA", status: 0, question: "CON LA J. Abultamiento o protuberancia que tienen en el lomo ciertos animales formado por acumulación de grasas"},

    { idNumber: 10, letter: "L", answer: "LINUX", status: 0, question: "CON LA L. Sistema operativo de código abierto creado por Linus Torvalds"},

    { idNumber: 11, letter: "M", answer: "MALEANTE", status: 0, question: "CON LA M. Que vive de forma marginal cometiendo acciones delictivas de manera habitual"},

    { idNumber: 12, letter: "N", answer: "NOTARIO", status: 0, question: "CON LA N. Funcionario público que tiene autoridad para dar fe de los actos públicos realizados ante él"},

    { idNumber: 13, letter: "Ñ", answer: "PATRAÑA", status: 0, question: "CONTIENE LA Ñ. Mentira o falsedad grande y complicada que se cuenta o se dice a alguien"},

    { idNumber: 14, letter: "O", answer: "ORCO", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { idNumber: 15, letter: "P", answer: "PANAL", status: 0, question: "CON LA P. Estructura de cera formada por multitud de pequeñas celdas o casillas de forma hexagonal construida por abejas"},

    { idNumber: 16, letter: "Q", answer: "QUIOSCO", status: 0, question: "CON LA Q. Local comercial de pequeño tamaño destinado a la venta de periódicos, revistas, golosinas y otros artículos"},

    { idNumber: 17, letter: "R", answer: "RATON", status: 0, question: "CON LA R. Roedor"},

    { idNumber: 18, letter: "S", answer: "SUDOKU", status: 0, question: "CON LA S. Pasatiempo que consiste en rellenar con números del 1 al 9 las casillas en blanco de una cuadrícula"},

    { idNumber: 19, letter: "T", answer: "TORNADO", status: 0, question: "CON LA T. Gigantesco embudo de aire, que sopla en espiral ciclónica hacia arriba, girando a modo de torbellino"},

    { idNumber: 20, letter: "U", answer: "URBE", status: 0, question: "CON LA U. Ciudad, especialmente la que tiene un gran número de habitantes"},
 
    { idNumber: 21, letter: "V", answer: "VOLTAJE", status: 0, question: "CON LA V. Potencial eléctrico, expresado en voltios"},

    { idNumber: 22, letter: "X", answer: "ANEXO", status: 0, question: "CONTIENE LA X. Que va unido a otra cosa de la cual depende o con la que está muy relacionado"},

    { idNumber: 23, letter: "Y", answer: "BYTE", status: 0, question: "CONTIENE LA Y. Conjunto de 8 bits que recibe el tratamiento de una unidad y que constituye el mínimo elemento de memoria direccionable de una computadora"},

    { idNumber: 24, letter: "Z", answer: "ACIDEZ", status: 0, question: "CONTIENE LA Z. Término que indica la cantidad de ácido en una sustancia"},

];

let skippedWords = [];

const playButton = document.querySelector('.btn');
const controls = document.querySelector('.ng-controls');
let userAnswer = '';
let questionsIndex = 0;
let correctAnswers = 0;
let scorePanel = document.getElementById("score");
let element = document.getElementById("js--ng-controls");
let hiddenDIV = document.getElementById("js--question-controls");
let endGameDIV = document.getElementById("js--pa-controls");
let timerPanel = document.getElementById("timer");
let buttonClose = document.getElementById("js--close");



function clickOnPlayButton() {
    playButton.addEventListener('click', () => {
        element.classList.add("hidden");
        hiddenDIV.classList.remove("hidden");
        buttonClose.classList.remove("hidden");
        countdownTimer();
        close();    
    });
    
    showDefinition();
    sendAnswer();   
}

function showDefinition() {
    let question = document.getElementById("js--definition");
    question.innerHTML = questions[questionsIndex].question;   
}

function sendAnswer() {
    let sendButton = document.getElementById("js--send");
    sendButton.addEventListener('click', () => {
        userAnswer = document.getElementById("js--user-answer").value;
        userAnswer = userAnswer.toUpperCase();
        checkAnswer();
        continuePlaying();   
    });
};

function checkAnswer() {
    
    if (userAnswer === questions[questionsIndex].answer) {
        document.getElementById(questions[questionsIndex].idNumber).className += " correct";
        correctAnswers++;
        scorePanel.innerHTML = correctAnswers;
        questions[questionsIndex].status = 1;
        checkAllLettersAnswered();
      
    } else {
        document.getElementById(questions[questionsIndex].idNumber).className += " incorrect";
        questions[questionsIndex].status = 1;  
        checkAllLettersAnswered(); 
    }

    return questionsIndex++;
}

function skipWord() {
    let skipButton = document.getElementById("js--pasapalabra");
    skipButton.addEventListener('click', () => {  
        questions.push(questions.splice(questionsIndex, 1)[0]);
        continuePlaying();    
    });
       
}

function continuePlaying() {
    document.getElementById("js--user-answer").value = '';
    showDefinition();
}

function countdownTimer() {
    let seconds = 300;

    function updateCountdown() { 
        if(timerPanel.innerHTML !== "0") {      
            timerPanel.innerHTML= seconds--;
        } else {
            timerPanel.innerHTML = "0";
            endGame();
        }                
    }
  
    setInterval(updateCountdown, 1000);   
} 

function showScore() {
    return `Has conseguido un total de ${correctAnswers} aciertos.`; 
}

function checkAllLettersAnswered() {
    const statusIsCompleted = (arr) => arr.status === 1;

    if(questions.every(statusIsCompleted)) {
        timerPanel.innerHTML = "0";
        endGame();

    }
   
}

function endGame() {
    let endTitle = document.getElementById("js--end-title");
    let endSubtitle = document.getElementById("js--end-subtitle");
    hiddenDIV.classList.add("hidden");
    endGameDIV.classList.remove("hidden");
    buttonClose.classList.add("hidden");
    endTitle.innerHTML = "Fin de la partida!";
    endSubtitle.innerHTML = showScore();

}

function askNewGame() {
    let playAgainButton = document.getElementById("js--pa");
    playAgainButton.addEventListener('click', () => {
        location.reload();
    })
}

function close() {
    buttonClose.addEventListener('click', () => {
        timerPanel.innerHTML = "0";
        endGame();
    })
}

clickOnPlayButton();
skipWord();