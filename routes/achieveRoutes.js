// Standard packages
const express = require('express');
// Import custom files
const achieveController = require('../controllers/achieveController');

const router = express.Router();

// ! the route is relative to 'root' which for these pages is set to /diary/
router.get('/', achieveController.achieve_index);
//router.get('/:id', achieveController.diary_year); // Unused

module.exports = router;