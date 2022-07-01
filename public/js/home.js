"use strict";

(function () {
  // Initialize clock
  const startTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $("home-datetime-time").textContent = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  };
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }
  startTime();

  // disable drag behaviour
  window.ondragstart = function () {
    return false;
  };

  // Selector function
  function $(x) {
    return document.getElementById(x);
  }

  // Set date
  (function () {
    const nth = function (d) {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    const now = new Date();
    const dayName = now.toLocaleDateString(navigator.locale, {
      weekday: "long",
    });
    const day = `${now.getDate()}` + `${nth(now.getDate())}`;
    const monthName = now.toLocaleDateString(navigator.locale, {
      month: "long",
    });
    const year = now.getFullYear();

    console.log(dayName);
    console.log(day);
    console.log(monthName);
    console.log(year);
    $(
      "home-datetime-date"
    ).textContent = `${dayName} ${day} ${monthName} ${year}`;
  })();
})();
