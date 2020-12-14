//Variabelen
var gamecontainer = document.getElementById("game-container");
var title = document.getElementById("title");
var description = document.getElementById("description");
var gamebuttons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryitem = document.getElementById("inventoryItem");

//Laat de code starten
Start();

//Begin scherm
function Start(){
  gamecontainer.className = "Start Game";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "In deze game kom je verder door de juiste keuzes te maken.";

  button1.innerHTML = "Start Game!";
  button1.style.display = "inline";
  button1.onclick = begin;

  button2.style.display = "none";

  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm begin
function begin(){
  gamecontainer.className = "begin";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "Het is nacht en je bent verdwaald in een bos en staat op een splitsing welke kant kies je?";

  button1.innerHTML = "Ga naar links.";
  button1.style.display = "inline";
  button1.onclick = huis;

  button2.innerHTML = "Ga naar rechts.";
  button2.style.display = "inline";
  button2.onclick = voorbijHuis;

  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm huis
function huis(){
  gamecontainer.className = "huis";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "Je komt aan bij een huis je ziet licht branden in het huis wat doe je?";

  button1.innerHTML = "Ga naar binnen.";
  button1.style.display = "inline";
  button1.onclick = huis2;

  button2.innerHTML = "Loop voorbij het huis.";
  button2.style.display = "inline";
  button2.onclick = voorbijHuis;

  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm huis2
function huis2(){
  gamecontainer.className = "huis2";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "Je hebt geen sleutel dus je kunt het huis niet betreden.";

  button1.innerHTML = "Ga terug.";
  button1.style.display = "inline";
  button1.onclick = voorbijHuis;

  button2.style.display = "none";

  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm voorbij huis
function voorbijHuis(){
  gamecontainer.className = "voorbijHuis";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "Je loopt richting een grot vlak naast de grot zie je een zwaard wat doe je?";

  button1.innerHTML = "Pak het zwaard.";
  button1.style.display = "inline";
  button1.onclick = grot2;

  button2.innerHTML = "Laat het zwaard liggen.";
  button2.style.display = "inline";
  button2.onclick = grot;

  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm grot
function grot(){
  gamecontainer.className = "grot";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "In de grot kom je een beer tegen wat doe je?";

  button1.innerHTML = "Probeer langs de beer te sluipen.";
  button1.style.display = "inline";
  button1.onclick = vermoord2;

  button2.innerHTML = "Vermoord de beer.";
  button2.style.display = "inline";
  button2.onclick = vermoord;

  button3.innerHTML = "Loop terug de grot uit.";
  button3.style.display = "inline";
  button3.onclick = struikel;

  inventoryitem.style.display = "none";
}

//Scherm grot2
function grot2(){
  gamecontainer.className = "grot2";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "In de grot kom je een beer tegen wat doe je?";

  button1.innerHTML = "Probeer langs de beer te sluipen.";
  button1.style.display = "inline";
  button1.onclick = vermoord2;

  button2.innerHTML = "Vermoord de beer.";
  button2.style.display = "inline";
  button2.onclick = succeed;

  button3.innerHTML = "Loop terug de grot uit.";
  button3.style.display = "inline";
  button3.onclick = struikel;

  inventoryitem.style.display = "none";
}

//Schrem struikel
function struikel(){
  gamecontainer.className = "struikel";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "Terwijl je naar de uitgang loopt struikel je over een steentje vervolgens wordt je vermoord door de beer!";

  button1.innerHTML = "Play again!";
  button1.style.display = "inline";
  button1.onclick = Start;

  button2.style.display = "none";

  button3.style.display = "none";
}

//Scherm vermoord
function vermoord(){
  gamecontainer.className = "vermoord";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "Je bent vermoord door de beer!";
    
  button1.innerHTML = "Play again!";
  button1.style.display = "inline";
  button1.onclick = Start;

  button2.style.display = "none";

  button3.style.display = "none";
}

//Scherm vermoord2
function vermoord2(){
  gamecontainer.className = "vermoord2";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "In de grot kom je oog in oog te staan met een beer dit overleef je niet!";

  button1.innerHTML = "Play again!";
  button1.style.display = "inline";
  button1.onclick = Start;

  button2.style.display = "none";

  button3.style.display = "none";
}

//Scherm succeed
function succeed(){
  gamecontainer.className = "succeed";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "Het is je gelukt om door de grot heen te komen! Je ziet een kampvuur wat doe je?";

  button1.innerHTML = "Rust uit bij het kampvuur";
  button1.style.display = "inline";
  button1.onclick = succeed2;

  button2.innerHTML = "Ga verder.";
  button2.style.display = "inline";
  button2.onclick = oververmoeid;

  button3.style.display = "none";

  inventoryitem.style.display = "none";
}

//Scherm oververmoeid
function oververmoeid(){
  gamecontainer.className = "oververmoeid";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "Je bent oververmoeid geraakt!";

  button1.innerHTML = "Play again!";
  button1.style.display = "inline";
  button1.onclick = Start;

  button2.style.display = "none";

  button3.style.display = "none";
}


//Scherm succeed2
function succeed2(){
  gamecontainer.className = "succeed2";
  title.innerHTML = "Escape the forest.";
  description.innerHTML = "Na het uitrusten kom je aan bij een dorpje. Het is je gelukt om uit het bos te komen!";

  button1.innerHTML = "Play again!";
  button1.style.display = "inline";
  button1.onclick = Start;

  button2.style.display = "none";

  button3.style.display = "none";
}