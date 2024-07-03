const time = document.getElementById("current-time");
const day = document.getElementById("current-day");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  const d = new Date();
  time.textContent = d.toLocaleTimeString();
  day.textContent = days[d.getDay()];
}, 1000);

console.log(utcTime);
