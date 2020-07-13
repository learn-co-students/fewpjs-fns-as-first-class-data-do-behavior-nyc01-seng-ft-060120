/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const split_time = time.split(':'); //["HH", "MM"]
  const parse_time = parseInt(split_time[0])
  if (parse_time < 12) {
    return "Good Morning"
  } else if (parse_time > 12 && parse_time < 18) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(text) {
  document.getElementById("greeting").innerText = text;
}
