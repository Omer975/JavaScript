//When typing into a text input field the text will appear on the paragraph updating with the same text live

const onChange = (evt) => {
  // 1. read from the input
  document.getElementById('p1')
  // 2. write into the paragraph
  .innerHTML=evt.target.value 
}

// setup the event handler
document.getElementById('inp1')
addEventListener('keydown', onChange)
