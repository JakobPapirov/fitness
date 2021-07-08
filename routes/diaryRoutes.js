// Standard packages
const express = require('express');
// Import custom files
const diaryController = require('../controllers/diaryController');

const router = express.Router();

// ! the route is relative to 'root' which for these pages is set to /diary/
router.get('/', diaryController.diary_index);
router.get('/:id', diaryController.diary_year);

module.exports = router;