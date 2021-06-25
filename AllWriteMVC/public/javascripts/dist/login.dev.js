"use strict";

var email = document.querySelector("[data-email]").value;
var password = document.querySelector("[data-password]");
var button = document.querySelector("[data-button]");
var form = document.querySelector("[data-form]");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  fetch("https://localhost:3600/login", {
    method: "POST",
    redirect: "follow",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password.value
    })
  }).then(function (res) {
    return res.json();
  }).then(function (json) {
    console;
    window.location = json.url;
  });
});