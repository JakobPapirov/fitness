// Standard packages
const express = require('express');
// Import custom files
const blogController = require('../controllers/blogController');

const router = express.Router();

// ! the route is relative to 'root' which for these pages is set to /program/
router.get('/', blogController.blog_index);
//router.get('/:id', statsController.program_year); // Unused

module.exports = router;