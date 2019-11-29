//Given a list of todo items
//When clicking on an item
 // Then the item should be removed from the page

function clearList(list){
  list.target.remove()
  }

function addList(element){
  element.addEventListener('click', clearList)
  
}

const Items = document.querySelectorAll('li')
Items.forEach(addList)
