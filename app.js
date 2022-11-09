var button = document.querySelector('button')
var txtInput = document.querySelector('textarea')
var outputDiv = document.querySelector('.output')
var serverURL = "https://api.funtranslations.com/translate/minion.json"
// var serverURL = "https://lessonfourapi-fork.akashpawar00.repl.co/translate/yoda.json"

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
}

function showOutput(text) {
  outputDiv.innerText = text
}

function errorHandler(error) {
  console.log("error occured", error)
  showOutput("error occured try again later")
}

function clickHandler(){
  var input = txtInput.value
  fetch(getTranslationURL(input))
  .then(response => response.json())
  .then(json => showOutput(json.contents.translated))
  .catch(errorHandler)
}

button.addEventListener("click", clickHandler)
