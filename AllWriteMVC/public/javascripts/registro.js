import axios from "axios"


const button = document.querySelector("[data-sendBtn]")
const user = document.querySelector("[data-user]")
const name = document.querySelector("[data-name]")
const email = document.querySelector("[data-user]")
const password_hash = document.querySelector("[data-password_hash]")
const checkPassword = document.querySelector("[data-checkPassword]")
const cookie = document.cookie.token


console.log(cookie)

const route = axios.create({
  baseURL: "http://localhost:3500/register",
  timeout: 5000
})

button.addEventListener("click", (data)=>{
    data.preventDefault()

    axios.post(route, {
      data:{
        user,
        name,
        email,
        password_hash,
        checkPassword
      }
    })

})
