function updateTime() {
  let currentLaDate = document.querySelector("#la-date");
  let laTime = document.querySelector("#la-current-time");
  let laTimeZone = moment().tz("America/Los_Angeles");
  currentLaDate.innerHTML = laTimeZone.format("MMMM Do YYYY");
  laTime.innerHTML = laTimeZone.format("hh:mm:ss[<span>]A[</span>]");

  let currentSydneyDate = document.querySelector("#sydney-date");
  let sydneyTime = document.querySelector("#sydney-current-time");
  let sydneyTimeZone = moment().tz("Australia/Sydney");
  currentSydneyDate.innerHTML = sydneyTimeZone.format("MMMM Do YYYY");
  sydneyTime.innerHTML = sydneyTimeZone.format("hh:mm:ss[<span>]A[</span>]");

  let currentTaipeiDate = document.querySelector("#taipei-date");
  let taipeiTime = document.querySelector("#taipei-current-time");
  let taipeiTimeZone = moment().tz("Asia/Taipei");
  currentTaipeiDate.innerHTML = taipeiTimeZone.format("MMMM Do YYYY");
  taipeiTime.innerHTML = taipeiTimeZone.format("hh:mm:ss[<span>]A[</span>]");

  let currentSpainDate = document.querySelector("#spain-date");
  let spainTime = document.querySelector("#spain-current-time");
  let spainTimeZone = moment().tz("America/Port_of_Spain");
  currentSpainDate.innerHTML = spainTimeZone.format("MMMM Do YYYY");
  spainTime.innerHTML = spainTimeZone.format("hh:mm:ss[<span>]A[</span>]");
}

setInterval(updateTime, 1000);
