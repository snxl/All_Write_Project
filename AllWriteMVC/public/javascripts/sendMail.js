
const contactForm = document.getElementById("contactSuport")
const nome = document.getElementById("name");
const mail = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("submit")


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: nome.value,
        email: mail.value,
        subject: subject.value,
        message: message.value
    }

    axios.post("https://localhost:3600/contact_support", formData).then((results) => {
        console.log(results)
        window.location.href = results.data.url
    })

})