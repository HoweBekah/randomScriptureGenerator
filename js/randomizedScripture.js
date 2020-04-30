var section = document.querySelector("section");

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

  console.log(bookLength);
  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h3");
  test.textContent = scripts.bom[ranBook].chapters[ranChap].reference;
  section.appendChild(test);
}

function randomOldT() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var scripts = scriptureData.works[3];
  var ranBook = Math.floor(Math.random() * (scripts.ot.length - 1));
  var bookLength = scripts.ot[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h3");
  test.textContent = scripts.ot[ranBook].chapters[ranChap].reference;
  section.appendChild(test);
}
function randomNewT() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var scripts = scriptureData.works[2];
  var ranBook = Math.floor(Math.random() * (scripts.nt.length - 1));
  var bookLength = scripts.nt[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h3");
  test.textContent = scripts.nt[ranBook].chapters[ranChap].reference;
  section.appendChild(test);
}
function randomDC() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var scripts = scriptureData.works[1];
  var ranBook = Math.floor(Math.random() * (scripts.sections.length - 1));

  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h3");
  test.textContent = scripts.sections[ranBook].reference;
  section.appendChild(test);
}
function randomGP() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var scripts = scriptureData.works[4];
  var ranBook = Math.floor(Math.random() * (scripts.pogp.length - 1));
  var bookLength = scripts.pogp[ranBook].chapters.length - 1;
  var ranChap = Math.floor(Math.random() * bookLength);

  console.log(bookLength);
  if (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  var test = document.createElement("h3");
  test.textContent = scripts.pogp[ranBook].chapters[ranChap].reference;
  section.appendChild(test);
}
function randomAll() {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  var titleDiv = document.getElementById("titlebook");
  var ranBook = Math.floor(Math.random() * 5);
  var scripts = scriptureData.works[ranBook];
  if (section.firstChild || titleDiv.firstChild) {
    section.removeChild(section.firstChild);
    titleDiv.removeChild(titleDiv.firstChild);
  }
  var titleDiv = document.getElementById("titlebook");
  var bookTitle = document.createElement("h2");
  bookTitle.textContent = scripts.title;
  titleDiv.appendChild(bookTitle);

  switch (ranBook) {
    case 0:
      return randomBom();
      break;
    case 1:
      return randomDC();
      break;
    case 2:
      return randomNewT();
      break;
    case 3:
      return randomOldT();
      break;
    case 4:
      return randomGP();
      break;
  }
}
