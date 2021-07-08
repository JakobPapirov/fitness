// Standard packages
const express = require('express');
// Import custom files
const genController = require('../controllers/genController');

const router = express.Router();

// ! the route is relative to 'root' which for these pages is set to /gen/
router.get('/', genController.gen_index);

module.exports = router;