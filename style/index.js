function updateTime() {
  let currentLaDate = document.querySelector("#la-date");
  if (currentLaDate) {
    let laTime = document.querySelector("#la-current-time");
    let laTimeZone = moment().tz("America/Los_Angeles");
    currentLaDate.innerHTML = laTimeZone.format("MMMM Do YYYY");
    laTime.innerHTML = laTimeZone.format("hh:mm:ss[<span>]A[</span>]");
  }

  let currentSydneyDate = document.querySelector("#sydney-date");
  if (currentSydneyDate) {
    let sydneyTime = document.querySelector("#sydney-current-time");
    let sydneyTimeZone = moment().tz("Australia/Sydney");
    currentSydneyDate.innerHTML = sydneyTimeZone.format("MMMM Do YYYY");
    sydneyTime.innerHTML = sydneyTimeZone.format("hh:mm:ss[<span>]A[</span>]");
  }

  let currentSpainDate = document.querySelector("#spain-date");
  if (currentSpainDate) {
    let spainTime = document.querySelector("#spain-current-time");
    let spainTimeZone = moment().tz("America/Port_of_Spain");
    currentSpainDate.innerHTML = spainTimeZone.format("MMMM Do YYYY");
    spainTime.innerHTML = spainTimeZone.format("hh:mm:ss[<span>]A[</span>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#city");
  citiesElement.innerHTML = `
  <div class="row">
          <div class="col-6">
            <h3 class="city" id="Australia/Sydney">${cityName}</h3>
            <h7 class="current-date" id="sydney-date">${cityTime.format(
              "MMMM Do YYYY"
            )}</h7>
          </div>
          <div class="col-6" class="time-element">
            <h2 class="current-time" id="sydney-current-time">${cityTime.format(
              "hh:mm:ss"
            )}<span>${cityTime.format("A")}</span>
            </h2>
          </div>
        </div>
<hr />
        <a href="/">All cities</a>
    `;
}

setInterval(updateTime, 1000);

let citySelectionElement = document.querySelector("#cities");
citySelectionElement.addEventListener("change", updateCity);
