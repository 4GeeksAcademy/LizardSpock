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
//boton de piedra
const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () {
  pcSelection();
  selectionByPlayer = "piedra";
  button1.innerHTML= '<i class="fa-solid fa-hand-back-fist"> </i>';
  document.getElementById("choice").innerHTML = "Tu elegiste: piedra";
  document.getElementById("win").innerHTML = selectWinner(selectionByPc, selectionByPlayer);
  showWinner();
  console.log(selectionByPlayer);
});
//boton de tijera 
const scizButton = document.getElementById("tijera");
scizButton.addEventListener("click", function () {
  pcSelection();
  selectionByPlayer = "tijera";
  button1.innerHTML='<i class="fa-solid fa-hand-scissors"></i>';
  document.getElementById("choice").innerHTML = "Tu elegiste: Tijera";
  document.getElementById("win").innerHTML = selectWinner(selectionByPc, selectionByPlayer);
  showWinner();
  console.log(selectionByPlayer);
});
//boton de papel
const papperButton = document.getElementById("papel");
papperButton.addEventListener("click", function () {
  pcSelection();
  selectionByPlayer = "papel";
  button1.innerHTML='<i class="fa-solid fa-hand"> </i>';
  document.getElementById("choice").innerHTML = "Tu elegiste: Papel";
  document.getElementById("win").innerHTML = selectWinner(selectionByPc, selectionByPlayer);
  showWinner();
  console.log(selectionByPlayer);
});
//boton lagarto
const lizardButton = document.getElementById("lagarto");
lizardButton.addEventListener("click", function () {
  pcSelection();
  selectionByPlayer = "lagarto";
  button1.innerHTML='<i class="fa-solid fa-hand-lizard"></i>';
  document.getElementById("choice").innerHTML = "Tu elegiste: Lagarto";
  document.getElementById("win").innerHTML = selectWinner(selectionByPc, selectionByPlayer);
  showWinner();
  console.log(selectionByPlayer);
});
// boton de spock
const spockButton = document.getElementById("spock");
spockButton.addEventListener("click", function () {
  pcSelection();
  selectionByPlayer = "spock";
  button1.innerHTML='<i class="fa-solid fa-hand-spock"></i>';
  document.getElementById("choice").innerHTML = "Tu elegiste: Spock";
  document.getElementById("win").innerHTML = selectWinner(selectionByPc, selectionByPlayer);
  showWinner();
  console.log(selectionByPlayer);
});

function pcSelection() {
  let randomNum = (Math.floor(Math.random() * 5) + 1);
  switch (randomNum) {
    case 1:
      document.getElementById("pcChoice").innerHTML = "La pc eligio: piedra";
      selectionByPc = "piedra";
      button2.innerHTML= '<i class="fa-solid fa-hand-back-fist"> </i>';
      return;
    case 2:
      document.getElementById("pcChoice").innerHTML = "La pc eligio: Papel";
      selectionByPc = "papel";
      button2.innerHTML='<i class="fa-solid fa-hand"> </i>';
      return;
    case 3:
      document.getElementById("pcChoice").innerHTML = "La pc eligio: Tijera";
      selectionByPc = "tijera";
      button2.innerHTML='<i class="fa-solid fa-hand-scissors"></i>';
      return;
    case 4:
      document.getElementById("pcChoice").innerHTML = "La pc eligio: Lagarto";
      selectionByPc = "lagarto";
      button2.innerHTML='<i class="fa-solid fa-hand-lizard"></i>';
      return;
    case 5:
      document.getElementById("pcChoice").innerHTML = "La pc eligio: Spock";
      selectionByPc = "spock";
      button2.innerHTML='<i class="fa-solid fa-hand-spock"></i>';
      return;
    default:
      break;
  }
}

function selectWinner(pcChoice, playerChoice) {
  console.log('estoy siendo llamado');
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

