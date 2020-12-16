//Variabelen
var gamecontainer = document.getElementById("game-container");
var title = document.getElementById("title");
var description = document.getElementById("description");
var gamebuttons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryitem = document.getElementById("inventoryItem");
var oppakken = {"Sleutel":false, "Zwaard":false};

//Geluid
/*var myMusic = new Audio()
myMusic.src = "sound.mp3"
myMusic.play();*/

//Laat de code starten
Start();

//Buttons
function setButtons(textButton1, eventHandler1, textButton2, eventHandler2, textButton3, eventHandler3){
  if(textButton1 !=null){
    button1.innerHTML = textButton1;
    button1.style.display = "inline";
    button1.onclick = eventHandler1;
  }else{
    button1.style.display = "none";
  }

  if(textButton2 !=null){
    button2.innerHTML = textButton2;
    button2.style.display = "inline";
    button2.onclick = eventHandler2;
  }else{
    button2.style.display = "none";
  }

  if(textButton3 !=null){
    button3.innerHTML = textButton3;
    button3.style.display = "inline";
    button3.onclick = eventHandler3;
  }else{
    button3.style.display = "none";
  }
}
//Begin scherm
function Start(){
  gamecontainer.className = "Start Game";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "In deze game kom je verder door de juiste keuzes te maken.";

  setButtons("Start game", begin, null);

  button2.style.display = "none";

  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm begin
function begin(){
  gamecontainer.className = "begin";
  title.innerHTML = "De splitsing.";
  description.innerHTML = "Het is nacht en je bent verdwaald in een bos je staat op een splitsing je kunt 2 kanten op, welke kant kies je?";

  setButtons("Ga naar links", huis, "Ga naar rechts", voorbijHuis);


  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm huis
function huis(){
  gamecontainer.className = "huis";
  title.innerHTML = "Het huis.";
  description.innerHTML = "Na een paar minuten lopen kom je aan bij een huis. In het huis zie je licht branden het ziet ernaar uit dat er niemand in het huis is wat doe je?";

  setButtons("Ga naar binnen", huis2, "Loop voorbij het huis", voorbijHuis);


  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm huis2
function huis2(){
  gamecontainer.className = "Het huis";
  title.innerHTML = "De sleutel.";
  description.innerHTML = "De deur zit opslot en je hebt geen sleutel dus je kunt het huis niet betreden.";

  setButtons("Ga terug", terug, null);

  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm terug
function terug(){
  gamecontainer.className = "terug";
  title.innerHTML = "De sleutel.";
  description.innerHTML = "Na een paar minuten wandelen zie je een sleutel op de grond liggen.";

  setButtons("Pak de sleutel en ga terug naar het huisje", huisje, "Ga verder", uitgehongerd);

  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm huisje
function huisje(){
  gamecontainer.className = "huisje";
  title.innerHTML = "Het huis.";
  description.innerHTML = "Na een paar minuten wandelen ben je weer bij het huisje aangekomen. Het lijkt nogsteeds of er niemand aanwezig is rondom het huis.";

  setButtons("Ga naar binnen", succeed3, null);

  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm voorbij huis
function voorbijHuis(){
  gamecontainer.className = "voorbijHuis";
  title.innerHTML = "De grot.";
  description.innerHTML = "Je loopt richting een grot vlak naast de grot zie je een zwaard liggen wat doe je?";

  setButtons("Ga de grot in", grot2, null);
 
  button3.style.display = "none";

  inventoryitem.style.display = "inline";
  inventoryitem.src= "Images/zwaard.png";
  inventoryitem.onclick= grot2, true;
}

//Scherm grot2
function grot2(){
  gamecontainer.className = "grot2";
  title.innerHTML = "In de grot.";
  description.innerHTML = "In de grot is het erg donker na een paar minuten zie je een beer in de grot wat doe je?";

  setButtons("Probeer langs de beer te sluipen", vermoord);

  button2.innerHTML = "Vermoord de beer.";
  button2.style.display = "inline";
  if(inventoryitem==true){
    button2.onclick = succeed;
  }else{
    button2.onclick = vermoord;
  }

  button3.innerHTML = "Loop terug de grot uit.";
  button3.style.display = "inline";
  button3.onclick = struikel;

  inventoryitem.style.display = "none";
}

//Schrem struikel
function struikel(){
  gamecontainer.className = "struikel";
  title.innerHTML = "You Lose!";
  description.innerHTML = "Terwijl je naar de uitgang loopt struikel je over een steentje vervolgens wordt je vermoord door de beer!";

  setButtons("Play again!", Start, null);

  button2.style.display = "none";

  button3.style.display = "none";
}

//Scherm vermoord
function vermoord(){
  gamecontainer.className = "vermoord";
  title.innerHTML = "You Lose!";
  description.innerHTML = "Je bent vermoord door de beer!";
    
  setButtons("Play again!", Start, null);

  button2.style.display = "none";

  button3.style.display = "none";
}

//Scherm succeed
function succeed(){
  gamecontainer.className = "succeed";
  title.innerHTML = "You Win!";
  description.innerHTML = "Het is je gelukt om door de grot heen te komen! Je ziet een kampvuur wat doe je?";

  setButtons("Rust uit bij het kampvuur", succeed2, "Ga verder", oververmoeid);
 
  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm oververmoeid
function oververmoeid(){
  gamecontainer.className = "oververmoeid";
  title.innerHTML = "You Lose!";
  description.innerHTML = "Je bent oververmoeid geraakt!";

  setButtons("Play again!", Start, null);

  button2.style.display = "none";

  button3.style.display = "none";
}

//Scherm succeed2
function succeed2(){
  gamecontainer.className = "succeed2";
  title.innerHTML = "Het kampvuur.";
  description.innerHTML = "Na het uitrusten kom je aan bij een dorpje. Het is je gelukt om uit het bos te komen!";

  setButtons("Play again!", Start, null);

  button2.style.display = "none";

  button3.style.display = "none";
}

//Scherm uitgehongerd
function uitgehongerd(){
  gamecontainer.className = "uitgehongerd";
  title.innerHTML = "You Lose!";
  description.innerHTML = "Je bent uitgehongerd geraakt!";

  setButtons("Play again!", Start, null);

  button2.style.display = "none";

  button3.style.display = "none";
}

//Scherm succed3
function succeed3(){
  gamecontainer.className = "succeed3";
  title.innerHTML = "You Win!";
  description.innerHTML = "In het huisje staat wat te eten en te drinken klaar, Je hebt de nacht overleefd!";

  setButtons("Play again!", Start, null);

  button2.style.display = "none";

  button3.style.display = "none";
}
