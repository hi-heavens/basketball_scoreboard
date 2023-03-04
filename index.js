let home = document.getElementById("home");
let guest = document.getElementById("guest");

let currentHomeScore = parseInt(home.innerText);
let currentGuestScore = parseInt(guest.innerText);

function addOne(parameter) {
  if (parameter === "one") {
    currentHomeScore += 1;
    home.textContent = currentHomeScore;
  } else {
    currentGuestScore += 1;
    guest.textContent = currentGuestScore;
  }
}

function addTwo(parameter) {
    if (parameter === "two") {
        currentHomeScore += 2;
        home.textContent = currentHomeScore;
      } else {
        currentGuestScore += 2;
        guest.textContent = currentGuestScore;
      }
}

function addThree(parameter) {
    if (parameter === "three") {
        currentHomeScore += 3;
        home.textContent = currentHomeScore;
      } else {
        currentGuestScore += 3;
        guest.textContent = currentGuestScore;
      }
}

function reset(){
    guest.textContent = 0;
    home.textContent = 0;
    currentHomeScore = 0;
    currentGuestScore = 0;
}