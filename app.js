var button = document.querySelector('button')
var txtInput = document.querySelector('textarea')
var outputDiv = document.querySelector('.output')
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
}

function clickHandler(){
  var input = txtInput.value
  fetch(getTranslationURL(input))
  .then(response => response.json())
  .then(json => outputDiv.innerText = (json.contents.translated))
}

button.addEventListener("click", clickHandler)
