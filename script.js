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
    errP.classList.add("form-correct");
    return true;
  } else {
    email.classList.add("border-error");
    errP.classList.add("text-error");
    setTimeout(() => {
      email.classList.remove("border-error");
      errP.classList.remove("text-error");
    }, 2000);
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
    emailTwo.classList.add("form-correct");
    return true;
  } else {
    emailTwo.classList.add("border-error");
    errPTwo.classList.add("text-error");
    // errPTwo.classList.add("form-correct");
    setTimeout(() => {
      emailTwo.classList.remove("border-error");
      errPTwo.classList.remove("text-error");
    }, 2000);
    return false;
  }
});
