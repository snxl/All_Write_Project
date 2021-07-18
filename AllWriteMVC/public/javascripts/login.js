const axios = require('axios').default;

const email = document.querySelector("[data-email]").value
const password = document.querySelector("[data-password]").value
const button = document.querySelector("[data-button]")
const form = document.querySelector("[data-form]")



form.addEventListener("submit", (event)=>{
  event.preventDefault()

  axios.post("https://localhost:3600/login", {
    email,
    password
  })

})




