// Standard packages
const express = require('express');
// Import custom files
const macrosController = require('../controllers/macrosController');

const router = express.Router();

// ! the route is relative to 'root' which for these pages is set to /diary/
router.get('/', macrosController.macros_index);
//router.get('/:id', statsController.stats_year); // Unused

module.exports = router;