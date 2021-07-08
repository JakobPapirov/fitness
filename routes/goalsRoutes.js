// Standard packages
const express = require('express');
// Import custom files
const goalsController = require('../controllers/goalsController');

const router = express.Router();

// ! the route is relative to 'root' which for these pages is set to /goals/
router.get('/', goalsController.goals_index);
//router.get('/:id', goalsController.goals_year); // Unused

module.exports = router;