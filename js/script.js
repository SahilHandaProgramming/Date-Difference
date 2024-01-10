"use strict";

// Selecting all the elements from HTML

const fromDate = document.querySelector(".from-date-input");
const toDate = document.querySelector(".to-date-input");

const differenceBtn = document.querySelector(".see-difference");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");


// Function to convert Inputs

function convertInputDays() {
  // Initializing Dates
  const dateFrom = new Date(fromDate.value);
  const dateTo = new Date(toDate.value);
  const finalDate = dateFrom - dateTo;
  const finalDays = Math.abs(finalDate / (1000 * 24 * 60 * 60));
  const finalHours = Math.abs(finalDate / (1000 * 60 * 60));
  const finalMinutes = Math.abs(finalDate / (1000 * 60));
  const finalSeconds = Math.abs(finalDate / 1000);
  
  // Setting the Text Content

  days.textContent = `${finalDays} Day(s) | `;
  hours.textContent = `${finalHours} Hour(s) | `;
  minutes.textContent = `${finalMinutes} Minute(s) | `;
  seconds.textContent = `${finalSeconds} Second(s) |`;

  // Condition if the Day is Today

  if(finalDays==0){
    days.textContent = `It's Today 😊 `;
    hours.textContent = ``;
    minutes.textContent = ``;
    seconds.textContent = ``;
  
  } 
}


differenceBtn.addEventListener("click", () => {
  convertInputDays();
});
