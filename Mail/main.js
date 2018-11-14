// chiedere mail ad utente
// controllo se mail è oresente il lista di chi può accedere
// stampa messaggio appropriato

var insert_email= prompt("prego, inserisca la sua email");

var list_email = ["Nemo@gmail.com","Dory@gmail.com","Marlin@libero.it","Le@ncino.com","tigro@yahoo.com"];

//ciclo for per individuare se la mail è presente in lista

for (var i = 0; i < list_email.length; i++) {
  var right_mail = list_email[i];


// se la mail che l'utente ha inserito è presente nella lista delle mail che posso accedere al sistema allora assegna il valore 0 alla variabile user_email

  if (insert_email == right_mail) {
   var user_email = 0;
 }

// se user_email è uguale a 0 significa che è presente in lista quindi stamperemo all'utente un messaggio di login corretto

if ( user_email == 0) {
 alert("Login effettuato con successo");
}

else{
 alert ("Errore! Questa mail non può accedere al sistema");
}
