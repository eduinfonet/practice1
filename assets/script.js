/* bubble start*/

function createbubble() {
  const section = document.querySelector(".section1");
  const createElement = document.createElement("span");

  let size = Math.random() * 60;

  createElement.style.width = 20 + size + "px";
  createElement.style.height = 20 + size + "px";

  createElement.style.left = Math.random() * innerWidth + "px";

  section.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 2000);
}

setInterval(createbubble, 500);

/* bubble start*/

/* digital clock start*/
function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
    pe = "PM";
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hourr",
    "minutes",
    "seconds",
    "period",
  ];

  var values = [
    week[dname],
    months[mo],
    dnum.pad(2),
    yr,
    hou.pad(2),
    min.pad(2),
    sec.pad(2),
    pe,
  ];

  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

/* digital clock end*/

/* Stiky Navbar start*/

let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  navbar.classList.toggle("sticky", value > 400);
});

/* Stiky Navbar end*/

/* pree loader start*/
let getpreload = document.getElementById("preload");

window.addEventListener("load", function () {
  setTimeout(function () {
    getpreload.style.display = "none";
  }, 2000);
});
/* pree loader end*/

/*Search bar start*/
const container = document.querySelector(".search-container");
const input = document.querySelector(".search");
const button = document.querySelector(".button");
const x = document.querySelector(".fa-times");

button.addEventListener("click", () => {
  container.classList.toggle("active");
  button.classList.toggle("active");
  x.classList.toggle("active");
  input.focus();
});

/*Search bar end*/

/* scroll top start*/

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
/* scroll top end*/

/*Expand images start*/

let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removingActiveClass();
    panel.classList.add("active");
  });
});

function removingActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

let seclector = document.body;
function modeChanger() {
  seclector.classList.toggle("dark-mode");
}
/*Expand images end*/

/**parallax start
let imgbg = document.querySelector(".image-bg");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  imgbg.style.clipPath = "circle(" + value + "px at center)";
});

/**parallax end**/
