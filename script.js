const end = new Date("October 13, 2023 15:30:00");
const timer = document.getElementById("timer");

let seconds = 0;
let changeColor = false;

function updateTime() {
  let ms = end.getTime() - Date.now();
  let days = Math.floor(ms / 86400000);
  let hours = Math.floor((ms - days * 86400000) / 3600000);
  let minutes = Math.floor((ms - days * 86400000 - hours * 3600000) / 60000);
  let newSeconds = Math.floor(
    (ms - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000
  );
  if (newSeconds != seconds) changeColor = true;
  seconds = newSeconds;
  changeDisplay(days, hours, minutes, seconds);
}

function changeDisplay(days, hours, minutes, seconds) {
  let text =
    "days: " +
    days +
    "\nhours: " +
    hours +
    "\nminutes: " +
    minutes +
    "\nseconds: " +
    seconds;
  timer.innerText = text.toUpperCase();

  if (changeColor) {
    changeColor = false;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }
}

setInterval(updateTime, 10);
