import app from "../app.js"

const port = process.env.PORT || '3000'
app.set('port', port)

app.listen(port, () => console.log(`server running: ${port}`))
app.listen(3030, () => console.log("server images run in port 3030"))