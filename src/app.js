import { onSiteGuests, onlineGuests } from "./guests";
const state = {
  letterOpened: false,
  invitationFlipped: false,
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const guestId = urlParams.get("guest");
const onSiteGuest = guestId && onSiteGuests[guestId];
const onlineGuest = guestId && onlineGuests[guestId];

let letterType = "online";
if (onSiteGuest) letterType = "onsite";

const letterContainer = document.querySelector(".letter__container");
const cardFlipper = document.querySelector(".flipper");
const letterBackground = document.querySelector(".letter__background");

letterContainer.addEventListener("click", () => {
  state.letterOpened = true;
  letterContainer.classList.add("foreground__animation");
  letterBackground.classList.add("background__animation");
});

cardFlipper.addEventListener("click", () => {
  if (state.invitationFlipped) {
    cardFlipper.classList.remove("flipped");
    state.invitationFlipped = false;
    return;
  }

  state.invitationFlipped = true;
  cardFlipper.classList.add("flipped");
});
