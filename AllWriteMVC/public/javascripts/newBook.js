window.addEventListener("load", function(event){

  const form = this.document.querySelector("[data-form]")

  const titulo = this.document.querySelector("[data-tittle]")
  const options = this.document.querySelector("[data-select]")
  const sinopse = this.document.querySelector("[data-sinopse]")
  const pdf = this.document.querySelector("[data-pdf]")
  const image = this.document.querySelector("[data-image]")

  form.addEventListener("submit", function(e){

    e.preventDefault()

    const fd = new FormData()

    fd.append("tittle", titulo.value)
    fd.append("category", options.value)
    fd.append("sinopse", sinopse.value)
    fd.append("file", pdf.files[0])
    fd.append("background", image.files[0])

    console.log(options)

    axios.post("https://localhost:3600/profile/new-book", fd, {
      headers: {
        "method":"POST",
        "Accept": 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
    }
    }).then(e => window.location.href = e.request.responseURL)
  })
})
