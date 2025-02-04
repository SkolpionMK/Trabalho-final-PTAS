const express = require("express")
const app = express()
const PORT = 3000
const Routes = require('./routes/routes.js')

app.use(express.json())

app.use('/', Routes)

app.listen(PORT, () => {
    console.log(`Servidor Inicializado com Sucesso http://localhost:${PORT}`)
})