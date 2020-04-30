var section = document.querySelector("section");

//JSON data pull
let requestURL =
  "https://howebekah.github.io/randomScriptureGenerator/standardworks.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "text";
request.send();

// request.onload = function () {
//   const scriptureText = request.responseText;
//   //console.log(scriptureText);
//   const scriptureData = JSON.parse(scriptureText);
//   console.log(scriptureData);
//   randomBom(scriptureData);
//   // randomOldT(scriptureData);
//   // randomNewT(scriptureData);
//   // randomDC(scriptureData);
//   // randomGP(scriptureData);
//   // randomAll(scriptureData);
// };

function randomBom() {
  var scriptureText = request.responseText;
  //console.log(scriptureText);
  var scriptureData = JSON.parse(scriptureText);
  console.log(scriptureData);
  var scripts = scriptureData.works[0];
  var ranBook = Math.floor(Math.random() * (scripts.bom.length - 1));
  var bookLength = scripts.bom[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  console.log(bookLength);
  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h2");
  test.textContent = "Read " + scripts.bom[ranBook].chapters[ranChap].reference;
  section.appendChild(test);
}

function randomOldT() {
  var scriptureText = request.responseText;
  //console.log(scriptureText);
  var scriptureData = JSON.parse(scriptureText);
  console.log(scriptureData);
  var scripts = scriptureData.works[3];
  var ranBook = Math.floor(Math.random() * (scripts.ot.length - 1));
  var bookLength = scripts.ot[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  console.log(bookLength);
  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h2");
  test.textContent = "Read " + scripts.ot[ranBook].chapters[ranChap].reference;
  section.appendChild(test);
}
function randomNewT() {
  var scriptureText = request.responseText;
  //console.log(scriptureText);
  var scriptureData = JSON.parse(scriptureText);
  console.log(scriptureData);
  var scripts = scriptureData.works[2];
  var ranBook = Math.floor(Math.random() * (scripts.nt.length - 1));
  var bookLength = scripts.nt[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  console.log(bookLength);
  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h2");
  test.textContent = "Read " + scripts.nt[ranBook].chapters[ranChap].reference;
  section.appendChild(test);
}
function randomDC() {
  var scriptureText = request.responseText;
  //console.log(scriptureText);
  var scriptureData = JSON.parse(scriptureText);
  console.log(scriptureData);
  var scripts = scriptureData.works[1];
  var ranBook = Math.floor(Math.random() * (scripts.dandc.sections.length - 1));
  // var bookLength = scripts.ot[ranBook].chapters.length - 1;
  // var ranChap = Math.floor(Math.random() * bookLength);

  //console.log(bookLength);
  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h2");
  test.textContent = "Read " + scripts.dandc.sections[ranBook].reference;
  section.appendChild(test);
}
function randomGP() {
  var scriptureText = request.responseText;
  //console.log(scriptureText);
  var scriptureData = JSON.parse(scriptureText);
  console.log(scriptureData);
  var scripts = scriptureData.works[4];
  var ranBook = Math.floor(Math.random() * (scripts.pogp.length - 1));
  var bookLength = scripts.pogp[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  console.log(bookLength);
  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h2");
  test.textContent =
    "Read " + scripts.pogp[ranBook].chapters[ranChap].reference;
  section.appendChild(test);
}
function randomAll() {
  var scriptureText = request.responseText;
  //console.log(scriptureText);
  var scriptureData = JSON.parse(scriptureText);
  console.log(scriptureData);
  var ranBook = Math.floor(Math.random() * 5);
  var scripts = scriptureData.works[0];

  // console.log(bookLength);
  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h2");
  test.textContent = "Read " + scripts.title;
  section.appendChild(test);
}
