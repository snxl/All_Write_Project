const email = document.querySelector("[data-email]").value
const password = document.querySelector("[data-password]")
const button = document.querySelector("[data-button]")
const form = document.querySelector("[data-form]")



form.addEventListener("submit", (event)=>{
  event.preventDefault()


  fetch("https://localhost:3600/login", {
    method: "POST",
    redirect:"follow",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({email: email, password: password.value})
  }).then(res =>res.json()).then(json =>{
    console
    window.location = json.url
  })
})




