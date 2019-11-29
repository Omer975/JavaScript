// to add items to a todo-list

const getTodosForm = () =>
  document
    .querySelector('#todos form')

const getTodosInput = () =>
  document
    .querySelector('#todos input[type="text"]')

const getTodosList = () =>
  document
    .querySelector('#todos ul')

const getMessage = () =>
  getTodosInput().value

const messageIsValid = text =>
  text.length > 0

const cancelEvent = (event) => {
  event.preventDefault()
  event.stopPropagation()
}

const resetTodosInput = () => {
  const input = getTodosInput()
  input.value = ''
  input.focus()
}


/**
 * App's Logic
 */

const checkStatus = () => {
  const classList = getTodosForm().classList
  const message = getMessage()

  messageIsValid(message)
    ? classList.add('is-valid')
    : classList.remove('is-valid')
}


// Setup the chat status listener

const appendMessage = (message) => {
  const textEl = document.createTextNode(message)
  const itemEl = document.createElement('li')
  itemEl.appendChild(textEl)
  getTodosList().appendChild(itemEl)
}


const onSubmit = (evt) => {
  cancelEvent(evt)
  
  const message = getMessage()
  messageIsValid && appendMessage(message)

  resetTodosInput()
}


const inputEl = getTodosInput()
inputEl.addEventListener('input', checkStatus)
inputEl.addEventListener('change', checkStatus)
checkStatus()


const formEl = getTodosForm()
formEl.addEventListener('submit', onSubmit)
