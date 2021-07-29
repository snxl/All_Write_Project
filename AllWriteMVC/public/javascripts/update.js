window.addEventListener("load", function(e){

  const form = document.querySelector("[data-form]")
  const name = document.querySelector("[data-name]")
  const user = document.querySelector("[data-user]")
  const bio = document.querySelector("[data-bio]")
  const image = document.querySelector("[data-image]")
  const newImage = document.querySelector("[data-image-update]")
  const ulError = document.querySelector("[data-errorList]")
  const deleted = document.querySelector("[data-delete]")

  const errorLine = this.document.createElement("li")

  errorLine.classList.add("errorLi")

  function readImage(image) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = () => reject();
        reader.readAsDataURL(image);
    });
  }

  image.addEventListener("change", function(e){

    readImage(e.target.files[0]).then(res =>{

      newImage.src = res

    })

  })

  form.addEventListener("submit", function(e){

    const file = new FormData()

    e.preventDefault()

    if(name.value.length === 0 && user.value.length === 0 && bio.value.length === 0 && image.files[0].length === 0){

      ulError.appendChild(errorLine)

      return errorLine.innerText = "Deve inserir ao menos um dado em um dos campos"

    }else{

      file.append("file", image.files[0])
      file.append("name", name.value)
      file.append("user", user.value)
      file.append("bio", bio.value)

    axios.post("https://localhost:3600/profile__config", file,{
      headers: {
        "Accept": 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
    }
    }).then(e => window.location.href = e.request.responseURL)
    }
  })


  deleted.addEventListener("click", function(e){

    console.log("dfdss")

    axios.delete("https://localhost:3600/profile__config", {}, {
      headers: {
        "Accept": 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
    }
    }).then(e=>{
      window.location.href = "https://localhost:3600/profile"
    })
  })
})
