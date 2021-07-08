// Standard packages
const express = require('express');
// Import custom files
const statsController = require('../controllers/statsController');

const router = express.Router();

// ! the route is relative to 'root' which for these pages is set to /stats/
router.get('/', statsController.stats_index);
//router.get('/:id', statsController.stats_year); // Unused

module.exports = router;