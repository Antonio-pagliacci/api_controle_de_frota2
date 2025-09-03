const express = require('express');
const router = express.Router();
const controller  = require('../controllers/motoristasController.js')

router.post('/', controller.inserir);
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);



module.exports = router