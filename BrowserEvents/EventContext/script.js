//Given page with some red buttons 
//When clicking on a button then the button should become green 
//and when clicking again tHen the button should go back to red

const onClick = (eventContext) => {
  // what is "eventContext" ???
  eventContext.target.classList.toggle('btn--clicked')
  }

const onClick1=(element) =>{
  element.addEventListener('click', onClick)
  
}

const buttons = document.querySelectorAll(".btn")

buttons.forEach(onClick1)
