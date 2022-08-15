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
    $("datetime-time").textContent = h + ":" + m + ":" + s;
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

    // console.log(dayName);
    // console.log(day);
    // console.log(monthName);
    // console.log(year);
    $("datetime-date").textContent = `${dayName} ${day} ${monthName} ${year}`;
  })();
})();

// Truncate index list info
// const h1s = document.getElementsByClassName("index-li-info-h1s");
// const h1sArr = [...h1s];
// for (let i = 0; i < h1sArr.length; i++) {
//   let cache = [...h1sArr[i].innerText];
//   if (cache.length > 15) {
//     cache = cache.splice(0, 15);
//     cache.push(".", ".", ".");
//     cache = cache.join("");
//     h1sArr[i].innerText = cache;
//   }
// }
// const h2s = document.getElementsByClassName("index-li-info-h2s");
// const h2sArr = [...h2s];
// for (let i = 0; i < h2sArr.length; i++) {
//   let cache = [...h2sArr[i].innerText];
//   if (cache.length > 30) {
//     cache = cache.splice(0, 30);
//     cache.push(".", ".", ".");
//     cache = cache.join("");
//     h2sArr[i].innerText = cache;
//   }
// }
// const buttons = document.getElementsByClassName("index-li-info-buttons");
// const buttonsArr = [...buttons];
// for (let i = 0; i < buttonsArr.length; i++) {
//   let cache = [...buttonsArr[i].innerText];
//   if (cache.length > 20) {
//     cache = cache.splice(0, 20);
//     cache.push(".", ".", ".");
//     cache = cache.join("");
//     buttonsArr[i].innerText = cache;
//   }
// }

// No-image thumbnail(s) sepia-filter
// const imgs = document.getElementsByClassName("index-li-img");
// const imgsArr = [...imgs];
// for (let i = 0; i < imgsArr.length; i++) {
//   if (imgsArr[i].src === "http://localhost:3000/img/no-image.webp") {
//     imgsArr[i].style.filter = "sepia(50%)";
//   }
// }
