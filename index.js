/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let timeGreet = parseInt(timeString, 10)
  if (timeGreet < 12) return `Good Morning`;
  if (timeGreet > 17) return `Good Evening`;
  return `Good Afternoon`
}
// greet("8:40")
// greet("14:21")
// greet("19:00")

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}