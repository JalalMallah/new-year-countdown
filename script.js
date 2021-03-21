const $ = document.querySelector.bind(document);

const year = $('.year');
const days = $('.days');
const hours = $('.hours');
const minutes = $('.minutes');
const seconds = $('.seconds');
const countdown = $('.countdown');

const nextYear = new Date().getFullYear() + 1;

const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

window.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  updateYear();
});

function updateCountdown() {
  const currentTime = new Date();
  const timeToNewYear = newYearTime - currentTime;

  const timeLeftInDays = Math.floor(timeToNewYear / 1000 / 60 / 60 / 24);
  const timeLeftInHours = Math.floor(timeToNewYear / 1000 / 60 / 60) % 24;
  const timeLeftInMinutes = Math.floor(timeToNewYear / 1000 / 60) % 60;
  const timeLeftInSeconds = Math.floor(timeToNewYear / 1000) % 60;

  days.textContent = timeLeftInDays < 10 ? `0${timeLeftInDays}` : timeLeftInDays;
  hours.textContent = timeLeftInHours < 10 ? `0${timeLeftInHours}` : timeLeftInHours;
  minutes.textContent = timeLeftInMinutes < 10 ? `0${timeLeftInMinutes}` : timeLeftInMinutes;
  seconds.textContent = timeLeftInSeconds < 10 ? `0${timeLeftInSeconds}` : timeLeftInSeconds;
}

function updateYear() {
  year.textContent = nextYear;
}
