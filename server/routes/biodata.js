const express = require('express');
const router = express.Router();
const API = require('../controllers/biodata');

router.get('/biodata', API.getBiodata);
router.post('/postbiodata', API.postBiodata);
router.put('/putbiodata/:id', API.putBiodata);
router.delete('/deletebiodata/:id', API.deleteBiodata);

module.exports = router;