const currentDate = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = weekdays[currentDate.getDay()];
const date = currentDate.toLocaleDateString();

document.getElementById("day").innerText = `Today is ${day}`
document.getElementById("dateDisplay").innerText = `${date}`;