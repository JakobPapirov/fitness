// Standard packages
const express = require('express');
// Import custom files
const programController = require('../controllers/programController');

const router = express.Router();

// ! the route is relative to 'root' which for these pages is set to /program/
router.get('/', programController.program_index);
router.get('/:id', programController.program_year);

module.exports = router;