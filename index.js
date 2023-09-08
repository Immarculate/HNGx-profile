const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  document.getElementById("dayOfWeek").innerHTML += dayOfWeek;

  const time = Date.now();
  document.getElementById("demo").innerHTML += time;
  setInterval(addZero, 1000);