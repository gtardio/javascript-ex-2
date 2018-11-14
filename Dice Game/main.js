// esercizio 2 - GIOCO DEI DADI

// Chi fa il punteggio più alto tra i due giocatori vince

// player 1 ( 2, 3)
//
// player 2 (4,4)

// sommapunti 1 // somma i dadi del player one
//
// somma punti 2 // somma i dadi del player two
//
// se (la somma dei dadi del player one) > (somma dadi player two)
// allora ---> vince player one
// else   ---> vince player two.

// attribuisco un numero del dado casuale da 1 a 6 a ciascun giocatore
var player1 = Math.floor(Math.random()*6+1);
var player2 = Math.floor(Math.random()*6+1);

document.getElementById("lancio1").innerHTML="Punteggio del Player1:  "+player1;

document.getElementById("lancio2").innerHTML="Punteggio del Player2:  "+player2;


if ( player1 > player2 ) {
  document.getElementById("esito").innerHTML="Ha Vinto il PLAYER1!"
}

else if ( player1 == player2 ) {
  document.getElementById("esito").innerHTML="Il punteggio è pari, i giocatori devono ritirare il dado"
}

else {
    document.getElementById("esito").innerHTML="Ha Vinto il PLAYER2!"
}
