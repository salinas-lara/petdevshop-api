const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const validarId = require('../middlewares/validarId');
const validarPet = require('../middlewares/validarPet');

router.post('/pets', validarPet, petController.criarPet);
router.get('/pets', petController.listarPets);
router.get('/pets/:id', validarId, petController.buscarPetPorId);
router.put('/pets/:id', validarId, validarPet, petController.atualizarPet);
router.delete('/pets/:id', validarId, petController.apagarPet);

module.exports = router;