import {Schema, model} from 'mongoose'

const LivrosSchema = new Schema({
    preco: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    qtd_paginas: {
        type: Number,
        required: true
    },
    generos: {
        type: Array,
        required: true
    },
    lancamento: {
        type: Number,
        required: true
    }
})

const livrosModel = model('Livros', LivrosSchema)

export {livrosModel}