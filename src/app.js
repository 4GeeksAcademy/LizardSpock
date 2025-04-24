import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let selectionByPlayer = "";
let selectionByPc = "";
let playerWon = true;
let pcWon = true;
let button1 = document.getElementById('playerButton');
let button2 = document.getElementById('pcButton');
// texto de la eleccion del player
let playerText = document.getElementById("choice");
//texto de ganador
let winnerText = document.getElementById("win");
//iconos para mostrar, Piedra, tijera, papel, lagarto, spock
let iconsArray = ['<i class="fa-solid fa-hand-back-fist"> </i>', '<i class="fa-solid fa-hand-scissors"></i>', '<i class="fa-solid fa-hand"> </i>', '<i class="fa-solid fa-hand-lizard"></i>', '<i class="fa-solid fa-hand-spock"></i>'];

//boton de piedra
const rockButton = document.getElementById("rock");

//añadir listener a la piedra
rockButton.addEventListener("click", () => {
  playTheGame('piedra', iconsArray[0], 'Piedra');
});


//boton de tijera 
const scizButton = document.getElementById("tijera");
scizButton.addEventListener("click", function () {
 playTheGame('tijeta',iconsArray[1],'Tijera');
});
//boton de papel
const papperButton = document.getElementById("papel");
papperButton.addEventListener("click", function () {
 playTheGame('papel',iconsArray[2],'Papel');
});
//boton lagarto
const lizardButton = document.getElementById("lagarto");
lizardButton.addEventListener("click", function () {
 playTheGame('lagarto',iconsArray[3],'Lagarto');
});
// boton de spock
const spockButton = document.getElementById("spock");
spockButton.addEventListener("click", function () {
  playTheGame('spock',iconsArray[4],'Spock')
});

//Seleccion de la pc
function pcSelection() {
  let randomNum = (Math.floor(Math.random() * 5) + 1);
  switch (randomNum) {
    case 1:
      document.getElementById("pcChoice").innerHTML = "La pc eligio: piedra";
      selectionByPc = "piedra";
      button2.innerHTML = '<i class="fa-solid fa-hand-back-fist"> </i>';
      return;
    case 2:
      document.getElementById("pcChoice").innerHTML = "La pc eligio: Papel";
      selectionByPc = "papel";
      button2.innerHTML = '<i class="fa-solid fa-hand"> </i>';
      return;
    case 3:
      document.getElementById("pcChoice").innerHTML = "La pc eligio: Tijera";
      selectionByPc = "tijera";
      button2.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
      return;
    case 4:
      document.getElementById("pcChoice").innerHTML = "La pc eligio: Lagarto";
      selectionByPc = "lagarto";
      button2.innerHTML = '<i class="fa-solid fa-hand-lizard"></i>';
      return;
    case 5:
      document.getElementById("pcChoice").innerHTML = "La pc eligio: Spock";
      selectionByPc = "spock";
      button2.innerHTML = '<i class="fa-solid fa-hand-spock"></i>';
      return;
    default:
      break;
  }
}
//elegir ganador
function selectWinner(pcChoice, playerChoice) {
 
  switch (playerChoice) {
    case 'piedra':
      if (pcChoice === playerChoice) {
        pcWon = false;
        playerWon = false;

        return 'Draw';
      }
      else if (pcChoice == 'lagarto' || pcChoice == 'tijera') {
        pcWon = false;
        playerWon = true;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });

        return 'Gano el Jugador';
      }
      else {
        pcWon = true;
        playerWon = false;
        return 'Gano la pc';
      }
    case 'tijera':
      if (pcChoice === playerChoice) {
        pcWon = false;
        playerWon = false;

        return 'Draw';
      }
      else if (pcChoice == 'lagarto' || pcChoice == 'papel') {

        pcWon = false;
        playerWon = true;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        return 'Gano el Jugador';
      }
      else {
        pcWon = true;
        playerWon = false;
        return 'Gano la pc';
      }
    case 'lagarto':
      if (pcChoice === playerChoice) {
        pcWon = false;
        playerWon = false;

        return 'Draw';
      }
      else if (pcChoice == 'spock' || pcChoice == 'papel') {
        pcWon = false;
        playerWon = true;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        return 'Gano el Jugador';
      }
      else {
        pcWon = true;
        playerWon = false;
        return 'Gano la pc';
      }
    case 'papel':
      if (pcChoice === playerChoice) {
        pcWon = false;
        playerWon = false;

        return 'Draw';
      }
      else if (pcChoice == 'piedra' || pcChoice == 'spock') {
        pcWon = false;
        playerWon = true;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        return 'Gano el Jugador';
      }
      else {
        pcWon = true;
        playerWon = false;
        return 'Gano la pc';
      }
    case 'spock':
      if (pcChoice === playerChoice) {
        pcWon = false;
        playerWon = false;

        return 'Draw';
      }
      else if (pcChoice == 'tijera' || pcChoice == 'piedra') {
        pcWon = false;
        playerWon = true;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        return 'Gano el Jugador';

      }
      else {
        pcWon = true;
        playerWon = false;
        return 'Gano la pc';
      }

  }
}
//mostrar ganador
function showWinner() {

  if (pcWon === playerWon) {
    button1.classList.remove('btn-success', 'btn-danger', 'btn-primary');
    button2.classList.remove('btn-success', 'btn-danger');
    button1.classList.add('btn-primary');
    button2.classList.add('btn-primary');
  }
  else if (playerWon == true) {
    button1.classList.remove('btn-success', 'btn-danger', 'btn-primary');
    button2.classList.remove('btn-success', 'btn-danger', 'btn-primary');
    button1.classList.add('btn-success');
    button2.classList.add('btn-danger');
  }
  else {
    button1.classList.remove('btn-success', 'btn-danger', 'btn-primary');
    button2.classList.remove('btn-success', 'btn-danger', 'btn-primary');
    button1.classList.add('btn-danger');
    button2.classList.add('btn-success');

  }
}
//funcion para que no se repita elcodigo tanto.
function playTheGame(playerSelection, iconToShow, selectionToShow) {  
  pcSelection();
  selectionByPlayer = playerSelection;
  button1.innerHTML = iconToShow;
  playerText.innerHTML = "Tu elegiste: " + selectionToShow;
  winnerText.innerHTML = selectWinner(selectionByPc, selectionByPlayer);
  showWinner();
}

