//Book of Mormon JSON data pull
var requestURL =
  "https://raw.githubusercontent.com/bcbooks/scriptures-json/master/book-of-mormon.json";
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

function randomBom(bomData) {}

function randomOldT(otData) {}
function randomNewT(ntData) {}
function randomDC(dcData) {}
function randomGP(gpData) {}
function randomAll(allData) {}
