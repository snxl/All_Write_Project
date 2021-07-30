const button = document.querySelector("[data-sendBtn]")
const user = document.querySelector("[data-user]")
const name = document.querySelector("[data-name]")
const email = document.querySelector("[data-email]")
const password_hash = document.querySelector("[data-password_hash]")
const checkPassword = document.querySelector("[data-checkPassword]")
const form = document.querySelector("[data-form]")


form.addEventListener("submit", (data)=>{
    data.preventDefault()

    axios.post("https://localhost:3600/register", {
      email: email.value,
      user: user.value,
      name: name.value,
      password_hash: password_hash.value,
      checkPassword: checkPassword.value
    }).then(e => {
      document.querySelector("html").innerHTML = e.data
    })

})
