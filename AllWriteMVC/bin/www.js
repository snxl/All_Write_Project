import server from "../app.js"

const port = process.env.PORT || '3000'

const portTLS = process.env.PORT_TLS || '3000'

server.server.listen(port, () => console.log(`server HTTP running: ${port}`))
server.serverTLS.listen(portTLS, () => console.log(`server HTTPS running: ${portTLS}`))

