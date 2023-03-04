let home = document.getElementById("home");
let guest = document.getElementById("guest");

let currentHomeScore = 0;
let currentGuestScore = 0;

function addOne(parameter) {
  if (parameter === "one") {
    currentHomeScore += 1;
    home.textContent = currentHomeScore;
  } else {
    currentGuestScore += 1;
    guest.textContent = currentGuestScore;
  }
  leader();
}

function addTwo(parameter) {
  if (parameter === "two") {
    currentHomeScore += 2;
    home.textContent = currentHomeScore;
  } else {
    currentGuestScore += 2;
    guest.textContent = currentGuestScore;
  }
  leader();
}

function addThree(parameter) {
  if (parameter === "three") {
    currentHomeScore += 3;
    home.textContent = currentHomeScore;
  } else {
    currentGuestScore += 3;
    guest.textContent = currentGuestScore;
  }
  leader();
}

function leader() {
  if (currentHomeScore > currentGuestScore) {
    home.classList.add("leader");
    guest.classList.remove("leader");
  } else if (currentHomeScore < currentGuestScore) {
    guest.classList.add("leader");
    home.classList.remove("leader");
  }
}

function reset() {
  guest.textContent = 0;
  home.textContent = 0;
  currentHomeScore = 0;
  currentGuestScore = 0;
  home.classList.remove("leader");
  guest.classList.remove("leader");
}
