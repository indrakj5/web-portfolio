const express = require('express');
const router = express.Router();
const API = require('../controllers/skill');

router.get('/skill', API.getSkill);
router.post('/postskill', API.postSkill);
router.put('/putskill/:id', API.putSkill);
router.delete('/deleteskill/:id', API.deleteSkill);

module.exports = router;