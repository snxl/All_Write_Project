const email = document.querySelector("[data-email]").value
const password = document.querySelector("[data-password]").value
const button = document.querySelector("[data-button]")
const form = document.querySelector("[data-form]")



form.addEventListener("submit", (event)=>{
  event.preventDefault()

  const formData = new formData()

  formData.append(email, password)


  fetch("https://localhost:3600/login", {
    method: "POST",
    redirect:"follow",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "multipart/form-data; boundary=CUSTOM"
    },
    body:formData
  }).then(res => res.json()).then(res =>{
    console.log(res)
  })
})




