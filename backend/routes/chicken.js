const express = require('express');
const router = express.Router();
const chickenController= require('../controllers/chicken')

const {auth} = require('../middleware/authMiddleware');


router.get('/',  chickenController.allChickenJerks)
router.post('/addChicken', auth, chickenController.addChickenJerks);
router.get('/getOneChicken/:id',   chickenController.oneChickenJerks);  // Добавлен слэш перед "getOneMeatJerk"
router.delete('/removeChicken/:id', auth,  chickenController.removeChickenJerk)
router.put('/updateChicken/:id', auth, chickenController. updateChickenJerk)

module.exports = router
