/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
if (parseInt(time, 10) < 12) return "Good Morning"
if (parseInt(time, 10) > 17) return "Good Evening"
return "Good Afternoon"
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let message = document.getElementById('greeting')
  message.innerText = string
}