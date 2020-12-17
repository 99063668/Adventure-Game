//Variabelen
var gamecontainer = document.getElementById("game-container");
var title = document.getElementById("title");
var description = document.getElementById("description");
var gamebuttons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryitem = document.getElementById("inventoryItem");
var oppakken = {Sleutel:false, Zwaard:false, Shotgun:false, Slenderman:false};

//Geluid
var myMusic = new Audio()
myMusic.src = "sound.mp3"
myMusic.play();

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

  setButtons("Start game", begin, null, null);

  inventoryitem.style.display = "none";
}

//Scherm begin
function begin(){
  gamecontainer.className = "begin";
  title.innerHTML = "De splitsing.";
  description.innerHTML = "Het is nacht en je bent verdwaald in een bos je staat op een splitsing je kunt 2 kanten op, welke kant kies je?";

  setButtons("Ga naar links", huis, "Ga naar rechts", voorbijHuis, null);

  inventoryitem.style.display = "none";
}

//Scherm huis
function huis(){
  gamecontainer.className = "huis";
  title.innerHTML = "Het huis.";
  description.innerHTML = "Na een paar minuten lopen kom je aan bij een huis. In het huis zie je licht branden het ziet ernaar uit dat er niemand in het huis is wat doe je?";

  setButtons("Ga naar binnen", huis2, "Loop voorbij het huis", voorbijHuis, null);

  inventoryitem.style.display = "none";
}

//Scherm huis2
function huis2(){
  gamecontainer.className = "Het huis";
  title.innerHTML = "De sleutel.";
  description.innerHTML = "De deur zit opslot en je hebt geen sleutel dus je kunt het huis niet betreden.";

  setButtons("Ga terug", terug, null, null);

  inventoryitem.style.display = "none";
}

//Scherm terug
function terug(){
  gamecontainer.className = "terug";
  title.innerHTML = "De sleutel.";
  description.innerHTML = "Na een paar minuten wandelen zie je een sleutel op de grond liggen.";

  setButtons("Pak de sleutel en ga terug naar het huisje", huisje, "Ga verder zonder sleutel", uitgehongerd, null);

  inventoryitem.style.display = "inline";
  inventoryitem.src= "Images/key.png";


  inventoryitem.onclick = function () {
    oppakken["Sleutel"] = true;
    terug();
  }
  if (oppakken["Sleutel"] == true){
    inventoryitem.style.display = "none";
  } else {
    inventoryitem.style.display = "block";
  }
  if (oppakken["Sleutel"] == true){
    button1.onclick = huisje;
    button1.disabled=false;
  } else {
    button2.onclick = uitgehongerd;
    button1.disabled=true;
  }
}

//Scherm huisje
function huisje(){
  gamecontainer.className = "huisje";
  title.innerHTML = "Het huis.";
  description.innerHTML = "Na een paar minuten wandelen ben je weer bij het huisje aangekomen. Het lijkt als of er iemand aanwezig is rondom het huis.";

  setButtons("Ga naar binnen", succeed3, "Probeer Sirenhead te vermoorden", sirenhead, null);

  inventoryitem.style.display = "none";
}

//Scherm voorbij huis
function voorbijHuis(){
  gamecontainer.className = "voorbijHuis";
  title.innerHTML = "De grot.";
  description.innerHTML = "Je loopt richting een grot vlak naast de grot zie je een zwaard liggen wat doe je?";

  setButtons("Ga de grot in", grot2, null), null;

  inventoryitem.style.display = "inline";
  inventoryitem.src= "Images/zwaard.png";

  inventoryitem.onclick = function () {
    oppakken["Zwaard"] = true;
    voorbijHuis();
  }
  if (oppakken["Zwaard"] == true){
    inventoryitem.style.display = "none";
  } else {
    inventoryitem.style.display = "block";
  }
}

//Scherm grot2
function grot2(){
  gamecontainer.className = "grot2";
  title.innerHTML = "In de grot.";
  description.innerHTML = "In de grot is het erg donker na een paar minuten zie je een beer in de grot wat doe je?";

  setButtons("Probeer langs de beer te sluipen", vermoord);

  button2.innerHTML = "Vermoord de beer.";
  button2.style.display = "inline";

  if (oppakken["Zwaard"] == true){
    button2.onclick = succeed;
  } else {
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

  setButtons("Play again!", Start, null, null);
}

//Scherm vermoord
function vermoord(){
  gamecontainer.className = "vermoord";
  title.innerHTML = "You Lose!";
  description.innerHTML = "Je bent vermoord door de beer!";
    
  setButtons("Play again!", Start, null, null);
}

//Scherm succeed
function succeed(){
  gamecontainer.className = "succeed";
  title.innerHTML = "You Win!";
  description.innerHTML = "Het is je gelukt om door de grot heen te komen! Je ziet een kampvuur wat doe je?";

  setButtons("Rust uit bij het kampvuur", succeed2, "Ga verder", oververmoeid, null);
}

//Scherm oververmoeid
function oververmoeid(){
  gamecontainer.className = "oververmoeid";
  title.innerHTML = "You Lose!";
  description.innerHTML = "Je bent oververmoeid geraakt!";

  setButtons("Play again!", Start, null, null);
}

//Scherm succeed2
function succeed2(){
  gamecontainer.className = "succeed2";
  title.innerHTML = "De vreemde man";
  description.innerHTML = "Na het uitrusten loop je verder door het bos je ziet een vreemde man wat doe je?.";

  setButtons("Ren weg", oververmoeid, "Verdedig jezelf", slenderman, null);

  inventoryitem.style.display = "inline";
  inventoryitem.src= "Images/shotgun.png";

  inventoryitem.onclick = function () {
    oppakken["Shotgun"] = true;
    succeed2();
  }
  if (oppakken["Shotgun"] == true){
    inventoryitem.style.display = "none";
  } else {
    inventoryitem.style.display = "block";
  }
  if (oppakken["Shotgun"] == true){
    button1.onclick = slenderman;
    button1.disabled=false;
  } else {
    button2.onclick = oververmoeid;
    button1.disabled=true;
  }
}

//Slenderman
function slenderman(){
  gamecontainer.className = "slenderman";
  title.innerHTML = "Slenderman.";
  description.innerHTML = "Met de shotgun die je net hebt opgepakt kun je Slenderman vermoorden.";

  setButtons("Ga verder", slenderman2, null, null);

  inventoryitem.style.display = "none";
  inventoryitem.src= "Images/slender.png";

  inventoryitem.onclick = function () {
    oppakken["Slenderman"] = true;
    slenderman();
  }
  if (oppakken["Slenderman"] == true){
    inventoryitem.style.display = "none";
  } else {
    inventoryitem.style.display = "block";
  }
  if (oppakken["Slenderman"] == true){
    button1.onclick = slenderman2;
    button1.disabled=false;
  } else {
    button2.onclick = slenderman2;
    button1.disabled=true;
  }
}

//Slenderman2
function slenderman2(){
  gamecontainer.className = "slenderman2";
  title.innerHTML = "You win!.";
  description.innerHTML = "Je hebt Slenderman vermoord en hebt veilig het eind van het bos bereikt.";

  setButtons("Play again!", Start, null, null);
}

  //Scherm uitgehongerd
function uitgehongerd(){
  gamecontainer.className = "uitgehongerd";
  title.innerHTML = "You Lose!";
  description.innerHTML = "Je bent uitgehongerd geraakt!";

  setButtons("Play again!", Start, null), null;
}

//Scherm succed3
function succeed3(){
  gamecontainer.className = "succeed3";
  title.innerHTML = "You Win!";
  description.innerHTML = "In het huisje staat wat te eten en te drinken klaar, Je hebt de nacht overleefd!";

  setButtons("Play again!", Start, null, null);
}

//Sirenhead
function sirenhead(){
  gamecontainer.className = "sirenhead";
  title.innerHTML = "You lose!";
  description.innerHTML = "Je probeerde Sirenhead aantevallen, dit heb je niet overleefd!";

  setButtons("Play again!", Start, null, null);
}