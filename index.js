/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let hours = parseInt(time.split(':')[0], 10)
  if (hours < 12) {
    return "Good Morning"
  } else if (hours < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(message) {
  const greeting = document.getElementById('greeting');
  greeting.innerText = message;
}

