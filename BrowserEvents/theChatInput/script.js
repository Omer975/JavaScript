//Given a text input element And a "post" button 
//When clicking on the button
  //If the input is empty Then alert an error message
  //Else Alert the input text
    //Then clear the input element And keep focus on the input element

const onFormSubmit = (event) => {
  event.preventDefault()
  event.stopPropagation()

const x = document.querySelector('#chat input[type="text"]')
  
const text = x.value
  
if (text == '' || text == ' ' ) {
    alert('Please enter a text')  
  } else {
      alert("Your text is : " + text)
      x.value = ''
      x.focus()
  }
}

document
  .getElementById('chat')
  .addEventListener('submit', onFormSubmit)
