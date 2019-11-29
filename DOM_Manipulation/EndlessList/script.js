//When I click on a list item
//A new list item should be appended into the list
// And it should contain an incremental number inside

let counter = 2

// button > onClick > add item to list with counter

function addList(){
  counter+=1
  const text = `Item n.${counter}`
  const listEl = document.querySelector('#list1')
  
  //const itemEl = document.createElement('li')
  const textEl = document.createTextNode(text)
  
  //itemEl.appendChild(textEl)
 // listEl.appendChild(itemEl)
  
  const p=document.createElement('li')
    //p.innerHTML=text
    //document.body.appendChild(p)
  listEl.appendChild(p).appendChild(textEl)
  
}


document
.querySelector('#btn1')
.addEventListener('click', addList)
