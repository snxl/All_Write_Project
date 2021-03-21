const express = require('express')
const exhbs = require('express-handlebars')
const app = express()
const path = require("path")


app.use(express.static(path.join(__dirname, './src/img')));
app.use(express.static(path.join(__dirname, './src/styles')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/index.html'))
})

app.listen(80, ()=>{
    console.log('server running')
})