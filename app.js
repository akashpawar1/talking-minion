var button = document.querySelector('button')
var input = document.querySelector('textarea')
var output = document.querySelector('.output')

button.addEventListener("click", function (){
  output.innerText = input.value
})
