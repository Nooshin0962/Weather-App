let date = new Date();
let WeekDays = [
  "Monday",
  "Tuesday",
  "Thursday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let today = WeekDays[date.getDay()];
let hour = date.getHours();
let minute = date.getMinutes();
let daytime = document.querySelector("#daytime");
daytime.innerHTML = `${today} ${hour}:${minute}`;

function showInfo(response) {
  let temp = document.querySelector("#showntemperature");
  console.log(response.data);
  temp.innerHTML = Math.round(response.data.main.temp);
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);
  let condition = document.querySelector("#condition");
  condition.innerHTML = response.data.weather[0].main;
}
function showCurrentInfo(response) {
  let h1 = document.querySelector("h1");
  console.log(response.data);
  h1.innerHTML = response.data.name;
  let temp = document.querySelector("#showntemperature");
  //console.log(response.data);
  temp.innerHTML = Math.round(response.data.main.temp);
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);
  let condition = document.querySelector("#condition");
  condition.innerHTML = response.data.weather[0].main;
}
function changeh1(event) {
  event.preventDefault();
  let selectedCity = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = selectedCity.value;
  let apiKey = "8161b4309ee03faae957729ba7104797";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showInfo);
}
function getCurrentCity(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
  let apiKey = "8161b4309ee03faae957729ba7104797";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showCurrentInfo);
}
function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(getCurrentCity);
}
let cityselector = document.querySelector("form");
cityselector.addEventListener("submit", changeh1);
let current = document.querySelector("#currentBtn");
current.addEventListener("click", getCurrentLocation);
