window.addEventListener("load", function(event){

  const form = this.document.querySelector("[data-form]")

  const titulo = this.document.querySelector("[data-tittle]")
  const options = this.document.querySelector("[data-select]")
  const sinopse = this.document.querySelector("[data-sinopse]")
  const pdf = this.document.querySelector("[data-pdf]")

  form.addEventListener("submit", function(e){

    e.preventDefault()

    const fd = new FormData()

    fd.append("titulo", titulo.value)
    fd.append("category", options.value)
    fd.append("sinopse", sinopse.value)

    console.log({titulo, options, sinopse, pdf})
  })
})
