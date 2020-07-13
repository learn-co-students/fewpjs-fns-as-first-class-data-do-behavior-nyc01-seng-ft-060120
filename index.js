/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/


const greet = (string) => {
  let time = string.split(":").join('.')
  let read = parseFloat(time);

  if (read < 12.0) {
    return "Good Morning";
  } else if (read >= 12.0 && read < 17.0) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(str) {
  document.getElementById("greeting").innerText = str;
}
