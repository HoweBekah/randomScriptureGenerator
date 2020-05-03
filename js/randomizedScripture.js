var section = document.querySelector("section");
var titleDiv = document.getElementById("titlebook");
var bomDiv = document.getElementById("bookMormon");
var dandcDiv = document.getElementById("DandC");
var oldTDiv = document.getElementById("oldT");
var newTDiv = document.getElementById("newT");
var pearlDiv = document.getElementById("pearlG");

//JSON data pull
let requestURL =
  "https://howebekah.github.io/randomScriptureGenerator/standardworks.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "text";
request.send();

function randomBom() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var scripts = scriptureData.works[0];
  var ranBook = Math.floor(Math.random() * (scripts.bom.length - 1));
  var bookLength = scripts.bom[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  if (bomDiv.firstChild) {
    bomDiv.removeChild(bomDiv.lastChild);
    // titleDiv.style.display = "none";
  }
  var test = document.createElement("h3");
  test.textContent = scripts.bom[ranBook].chapters[ranChap].reference;
  test.className = "result";
  bomDiv.appendChild(test);
}

function randomOldT() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var scripts = scriptureData.works[3];
  var ranBook = Math.floor(Math.random() * (scripts.ot.length - 1));
  var bookLength = scripts.ot[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  if (oldTDiv.firstChild) {
    oldTDiv.removeChild(oldTDiv.lastChild);
    // titleDiv.style.display = "none";
  }
  var test = document.createElement("h3");
  test.textContent = scripts.ot[ranBook].chapters[ranChap].reference;
  test.className = "result";
  oldTDiv.appendChild(test);
}
function randomNewT() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var scripts = scriptureData.works[2];
  var ranBook = Math.floor(Math.random() * (scripts.nt.length - 1));
  var bookLength = scripts.nt[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  if (newTDiv.firstChild) {
    newTDiv.removeChild(newTDiv.lastChild);
    //titleDiv.style.display = "none";
  }
  var test = document.createElement("h3");
  test.textContent = scripts.nt[ranBook].chapters[ranChap].reference;
  newTDiv.appendChild(test);
}
function randomDC() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var scripts = scriptureData.works[1];
  var ranBook = Math.floor(Math.random() * (scripts.sections.length - 1));

  if (dandcDiv.firstChild) {
    dandcDiv.removeChild(dandcDiv.lastChild);
    // titleDiv.style.display = "none";
  }
  var test = document.createElement("h3");
  test.textContent = scripts.sections[ranBook].reference;
  test.className = "result";
  dandcDiv.appendChild(test);
}
function randomGP() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var scripts = scriptureData.works[4];
  var ranBook = Math.floor(Math.random() * (scripts.pogp.length - 1));
  var bookLength = scripts.pogp[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  if (pearlDiv.firstChild) {
    pearlDiv.removeChild(pearlDiv.lastChild);
    //titleDiv.style.display = "none";
  }
  var test = document.createElement("h3");
  test.textContent = scripts.pogp[ranBook].chapters[ranChap].reference;
  test.className = "result";
  pearlDiv.appendChild(test);
}
function randomAll() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var titleDiv = document.getElementById("titlebook");
  var ranBook = Math.floor(Math.random() * 5);
  var scripts = scriptureData.works[ranBook];
  if (titleDiv.firstChild) {
    titleDiv.removeChild(titleDiv.lastChild);
  }
  // if (titleDiv.style.display === "none") {
  //   titleDiv.style.display = "block";
  // }
  var bookTitle = document.createElement("h2");
  bookTitle.textContent = scripts.title;
  bookTitle.className = "result";
  titleDiv.appendChild(bookTitle);
  // if (titleDiv.style.display === "block") {
  //   switch (ranBook) {
  //     case 0:
  //       randomBom();
  //       break;
  //     case 1:
  //       randomDC();
  //       break;
  //     case 2:
  //       randomNewT();
  //       break;
  //     case 3:
  //       randomOldT();
  //       break;
  //     case 4:
  //       randomGP();
  //       break;
  //     default:
  //       document.getElementById("titlebook").style.display = "block";
  //       break;
  //   }
  //}
}
