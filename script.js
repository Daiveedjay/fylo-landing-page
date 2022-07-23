"use strict";

let emailButton = document.querySelector(".email-button");
let email = document.querySelector("input[type=text]");
let errP = document.querySelector(".form-error");

emailButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    email.classList.remove("border-error");
    errP.classList.remove("form-error");
    return true;
  } else {
    email.classList.add("border-error");
    errP.classList.add("hidden");
    setTimeout(() => {
      email.classList.remove("border-error");
      errP.classList.remove("hidden");
    }, 3000);
    return false;
  }
});

///////////////
let emailButtonTwo = document.querySelector(".button-2");
let emailTwo = document.querySelector("#emailTwo");
let errPTwo = document.querySelector(".error-2");

emailButtonTwo.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    emailTwo.classList.remove("border-error");
    errPTwo.classList.remove("form-error");
    return true;
  } else {
    emailTwo.classList.add("border-error");
    errPTwo.classList.add("hidden-light");
    setTimeout(() => {
      emailTwo.classList.remove("border-error");
      errPTwo.classList.remove("hidden-light");
    }, 3000);
    return false;
  }
});
