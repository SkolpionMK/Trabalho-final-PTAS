Livros = [
    { ID: 1, preco: 49.90, nome: "O Alquimista", autor: "Paulo Coelho", qtd_paginas: 208, genero: "Ficção", lancamento: 1988 },
    { ID: 2, preco: 39.50, nome: "1984", autor: "George Orwell", qtd_paginas: 328, genero: "Distopia", lancamento: 1949 },
    { ID: 3, preco: 59.99, nome: "Dom Casmurro", autor: "Machado de Assis", qtd_paginas: 256, genero: "Romance", lancamento: 1899 },
    { ID: 4, preco: 29.90, nome: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", qtd_paginas: 96, genero: "Fábula", lancamento: 1943 },
    { ID: 5, preco: 45.00, nome: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", qtd_paginas: 1178, genero: "Fantasia", lancamento: 1954 },
    { ID: 6, preco: 34.75, nome: "Cem Anos de Solidão", autor: "Gabriel García Márquez", qtd_paginas: 417, genero: "Realismo Mágico", lancamento: 1967 },
    { ID: 7, preco: 27.80, nome: "O Apanhador no Campo de Centeio", autor: "J.D. Salinger", qtd_paginas: 234, genero: "Romance", lancamento: 1951 },
    { ID: 8, preco: 51.90, nome: "Orgulho e Preconceito", autor: "Jane Austen", qtd_paginas: 279, genero: "Romance", lancamento: 1813 },
    { ID: 9, preco: 38.20, nome: "Moby Dick", autor: "Herman Melville", qtd_paginas: 635, genero: "Aventura", lancamento: 1851 },
    { ID: 10, preco: 42.99, nome: "O Código Da Vinci", autor: "Dan Brown", qtd_paginas: 454, genero: "Suspense", lancamento: 2003 }
];

const cadastraLivro = (req,res) => {
    const { preco, nome, autor, qtd_paginas, genero, lancamento} = req.body

    if(preco <= 0|| !nome || !autor || !qtd_paginas <= 0|| !genero || !lancamento) {
        return res.status(400).json({Error: 'Por favor preencha todos os campos com valores válidos.'})
    }

    const Livro = {ID: Livros.length + 2, preco, nome, autor, qtd_paginas, genero, lancamento}
    return res.status(201).json(Livro)
}

const buscaGeral = (req, res) => {
    res.json({Livros})
}

const buscaPorID = (req,res) => {
    const ID = req.params.id - 0
    const result = Livros.find(n => n.ID === ID)
    if(!result) {
        return res.status(404).json({Error: "Livro não encontrado", ID: ID})
    }
    return res.json({result})
}

const atualizaLivro = (req,res) => {
    const ID = req.params.id - 0
    const result = Livros.find(n => n.ID === ID)
    if(!result) {
        return res.status(404).json({Error: "Livro não encontrado"})
    }
    
    const { preco, nome, autor, qtd_paginas, genero, lancamento} = req.body

    if(preco > 0){result.preco = preco}
    if(nome){result.nome = nome}
    if(autor){result.autor = autor}
    if(qtd_paginas > 0){result.qtd_paginas = qtd_paginas}
    if(genero){result.genero = genero}
    if(lancamento) {result.lancamento = lancamento}

    return res.json(result)
}

const deletaLivro = (req,res) => {
    const ID = req.params.id
    Livros.pop(ID - 2)

    return res.json({Livros})
}

module.exports = {
    cadastra: cadastraLivro,
    busca: buscaGeral,
    buscaPorID: buscaPorID,
    atualiza: atualizaLivro,
    deleta: deletaLivro
}