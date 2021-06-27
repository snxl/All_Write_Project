import axios from "axios"

window.alert("password")

window.addEventListener("load", ()=>{

  const email = document.querySelector("[data-email]")
  const password = document.querySelector("[data-password]")
  const button = document.querySelector("[data-button]")
  const form = document.querySelector("[data-form]")






  form.addEventListener("submit", event =>{
    event.preventDefault()

    console.log(password)

    const route = axios.create({
      baseURL: `https://localhost:${process.env.PORT_TLS || 3100}/login`,
      timeout: 3000
    })

    console.log(email, password)

    axiosRoute.post(route ,{
      data:{
        email,
        password: password
      }
    })
  })


})

