// Standard packages
const express = require('express');
// Import custom files
const loginController = require('../controllers/loginController');

const router = express.Router();

// ! the route is relative to 'root' which for these pages is set to /diary/
router.get('/', loginController.login);
//router.get('/:id', statsController.stats_year); // Unused

module.exports = router;