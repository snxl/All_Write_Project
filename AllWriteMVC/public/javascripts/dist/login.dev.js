"use strict";

var email = document.querySelector("[data-email]").value;
var password = document.querySelector("[data-password]").value;
var button = document.querySelector("[data-button]");
var form = document.querySelector("[data-form]");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = new formData();
  formData.append(email, password);
  fetch("https://localhost:3600/login", {
    method: "POST",
    redirect: "follow",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "multipart/form-data; boundary=CUSTOM"
    },
    body: formData
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    console.log(res);
  });
});