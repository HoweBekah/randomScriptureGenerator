//Book of Mormon JSON data pull
var requestURL =
  "https://github.com/HoweBekah/randomScriptureGenerator/standardworks.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "text";
request.send();

request.onload = function () {
  var scriptureText = request.responseText;
  var scriptureData = JSON.parse(scriptureText);
  randomBom(scriptureData);
  randomOldT(scriptureData);
  randomNewT(scriptureData);
  randomDC(scriptureData);
  randomGP(scriptureData);
  randomAll(scriptureData);
};
console.log(scriptureData);
function randomBom(bomData) {
  var boms = jObj["works"];

  var test = document.getElementById("readThis");
  test.textContent = boms.books;
}

function randomOldT(otData) {}
function randomNewT(ntData) {}
function randomDC(dcData) {}
function randomGP(gpData) {}
function randomAll(allData) {}
