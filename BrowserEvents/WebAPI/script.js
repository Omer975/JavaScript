//When clicking on a button then the button should become green

function onClick () {
  // Step1: get a reference to the button
  const $btn1El=document.getElementById("btn1")
  // Step2: add the class "clicked"
  $btn1El.classList.toggle("clicked")
}

// Configure the event handler on the button
addEventListener('click', onClick)
