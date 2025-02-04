const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller.js')

router.get('/',
    controller.busca
)

router.get('/:id',
    controller.buscaPorID
)

router.post('/',
    controller.cadastra
)

router.put('/:id',
    controller.atualiza
)

router.delete('/:id',
    controller.deleta
)

module.exports = router