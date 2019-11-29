//This JS code ask your password if the password is "friend" shows a "welcome" message else show  "you shall not pass" message
const password = prompt('Enter Password')
var name = prompt('Enter your name')
if (password === "friend") {
  document.write("Welcome "  + name)
 }else{
  alert("you shall not pass")
 }
