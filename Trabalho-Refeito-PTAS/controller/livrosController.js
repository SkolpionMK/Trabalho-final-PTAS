import { livrosModel } from "../DataBase/livros.js";

const cadastroLivro = async (req, res) => {try{
    const { preco, nome, autor, qtd_paginas, generos, lancamento} = req.body

    if(!preco || !nome || !autor || !qtd_paginas || !generos || !lancamento) {
        return res.json({erro: true, Error: 'Por favor preencha todos os campos.'})
    }

    /*O código de status de resposta HTTP 400 Bad Request indica que o 
    servidor não pode ou não irá processar a requisição devido a alguma
     coisa que foi entendida como um erro do cliente */

    const livro = new livrosModel({preco, nome, autor, qtd_paginas, generos, lancamento})
    await livro.save()
    return res.json({erro: false, livro})

} catch(error) {
    return res.json({erro: true, error})
} }

const buscaGeral = async (req, res) => {try{
    const livros = await livrosModel.find()
    console.log('GET')
    res.json({erro: false, livros})
    //codigo 200 indica um status de OK
} catch (error) {
    res.json({erro: true, error})
}}

const buscaPorID = async (req,res) => {try{
    const id = req.params.id
    const result = await livrosModel.findById(id)
    if(!result) {
        return res.json({erro: true, Error: "Livro não encontrado", ID: ID})
    }
    return res.json({erro: false, result})
} catch(error) {
    return res.json({erro: true, error})
}}

const atualizaLivro = async (req,res) => {try{
    const id = req.params.id
    const result = await livrosModel.findByIdAndUpdate(id, req.body, {new: true})
    if(!result) {
        return res.json({erro: true,Error: "Livro não encontrado"})
    }
    return res.json(result)
} catch(error) {
    res.json({erro:true, error})
}}

const deletaLivro = async (req,res) => {try{
    const id = req.params.id
    const livro = await livrosModel.findByIdAndDelete(id)
    if (!livro) {
        return res.json({erro: true, Error: "aluno não encontrado"})
    }
    const livros = await livrosModel.find()
    return res.json({erro: false, livros})
} catch(error) {
    return res.json({erro: true. error})
}} 

export {cadastroLivro, buscaGeral, buscaPorID, atualizaLivro, deletaLivro}