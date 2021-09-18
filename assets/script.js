// var today = moment();
// $("#currentDay").text(today.format("MMM Do, YYYY"));

var nineItem = $("#09");
var tenItem = $("#10");
var elevenItem = $("#11");
var twelveItem = $("#12");
var oneItem = $("#1");
var twoItem = $("#2");
var threeItem = $("#3");
var fourItem = $("#4");
var fiveItem = $("#5");
var sixItem = $("#6");
var sevenItem = $("#7");
var eightItem = $("#8");
var ninepmItem = $("#9");
var textarea = $("textarea");

// ----------------------------
// ----------BUTTONS-----------
// ----------------------------
$(".addBtn").on("click", saveScheduledItems);
function saveScheduledItems(event) {
  var element = event.target;
  if (element.matches(".add-09")) {
    localStorage.setItem(09, nineItem.val());
  } else if (element.matches(".add-10")) {
    localStorage.setItem(10, tenItem.val());
  } else if (element.matches(".add-11")) {
    localStorage.setItem(11, elevenItem.val());
  } else if (element.matches(".add-12")) {
    localStorage.setItem(12, twelveItem.val());
  } else if (element.matches(".add-1")) {
    localStorage.setItem(01, oneItem.val());
  } else if (element.matches(".add-2")) {
    localStorage.setItem(02, twoItem.val());
  } else if (element.matches(".add-3")) {
    localStorage.setItem(03, threeItem.val());
  } else if (element.matches(".add-4")) {
    localStorage.setItem(04, fourItem.val());
  } else if (element.matches(".add-5")) {
    localStorage.setItem(05, fiveItem.val());
  } else if (element.matches(".add-6")) {
    localStorage.setItem(06, sixItem.val());
  } else if (element.matches(".add-7")) {
    localStorage.setItem(07, sevenItem.val());
  } else if (element.matches(".add-8")) {
    localStorage.setItem(08, eightItem.val());
  } else if (element.matches(".add-9")) {
    localStorage.setItem(9, ninepmItem.val());
  }
}

// -----------------------------
// -------RENDER----------------
// -----------------------------
function renderScheduledItems() {
  nineItem.val(localStorage.getItem(09));
  tenItem.val(localStorage.getItem(10));
  elevenItem.val(localStorage.getItem(11));
  twelveItem.val(localStorage.getItem(12));
  oneItem.val(localStorage.getItem(01));
  twoItem.val(localStorage.getItem(02));
  threeItem.val(localStorage.getItem(03));
  fourItem.val(localStorage.getItem(04));
  fiveItem.val(localStorage.getItem(05));
  sixItem.val(localStorage.getItem(06));
  sevenItem.val(localStorage.getItem(07));
  eightItem.val(localStorage.getItem(08));
  ninepmItem.val(localStorage.getItem(9));
}



function load() {
  var currentDay = $("#currentDay");
  currentDay.text(moment().format("dddd, MMMM Do, YYYY, HH:mm:ss"));
  var currentHour = moment().format("HH");
  setInterval(() => {
  }, 1000);
  renderScheduledItems();
}
load();

var currentDate = moment().format("MMM Do YYYY H:mm");
$("#currentDay").text(currentDate);
var textareaEl = $(".textarea");
var CurrentHourEl = parseInt(document.querySelector("id"));


function changeColor() {
  
  $(".textarea").each(function () {
      var todayInTime = moment().format("H")
      
      var hour = parseInt($(this).attr("id"))
      if (hour < todayInTime) {
          $
  })
}
changeColor();
