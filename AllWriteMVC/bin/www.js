import app from "../app.js"

const port = process.env.PORT || '3000'
app.set('port', port)

app.listen(port, () => console.log(`server running: ${port}`))
