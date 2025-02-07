import express from 'express'
import mongoose from 'mongoose'
import {livrosRouter} from './router/livrosRouter.js'

const app = express()
app.use(express.json())
const PORT = 3000

app.use('/livros', livrosRouter)

mongoose.connect('mongodb://localhost:27017/TrabalhoPTAS-CRUD').then(() => {
    console.log('Conexão com o banco de dados feita com sucesso!!!')
}).catch(err => {
    console.error('Erro ao conectar no banco de dados: ', err)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})