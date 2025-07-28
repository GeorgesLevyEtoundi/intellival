const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

router.get('/examples', exampleController.getAllExamples);

module.exports = router;
