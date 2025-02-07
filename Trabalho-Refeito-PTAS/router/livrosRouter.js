import express from "express";
const livrosRouter = express.Router()
import { atualizaLivro, buscaGeral, buscaPorID, cadastroLivro, deletaLivro } from "../controller/livrosController.js";

livrosRouter.post('/', cadastroLivro)
livrosRouter.get('/', buscaGeral)
livrosRouter.get('/:id', buscaPorID)
livrosRouter.put('/:id', atualizaLivro)
livrosRouter.delete(':id', deletaLivro)

export {livrosRouter}