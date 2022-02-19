const express = require('express');
const router = express.Router();
const API = require('../controllers/portfolio');

router.get('/portfolio', API.getPortfolio);
router.post('/postportfolio', API.postPortfolio);
router.put('/putportfolio/:id', API.putPortfolio);
router.delete('/deleteportfolio/:id', API.deletePortfolio);

module.exports = router;