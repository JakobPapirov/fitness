// Standard packages
const express = require('express');
// Import custom files
const statsController = require('../controllers/statsController');

const router = express.Router();

// ! the route is relative to 'root' which for these pages is set to /stats/
router.get('/', statsController.stats_index);

//router.get('/createdb/', statsController.stats_createdb);

router.get('/hantel/', statsController.stats_db_index);
router.get('/kroppsvikt/', statsController.stats_bw_index);
router.get('/lopning/', statsController.stats_run_index);
router.get('/rodd/', statsController.stats_row_index);
router.get('/ringar/', statsController.stats_rings_index);
router.get('/simning/', statsController.stats_swim_index);
router.get('/skivstang/', statsController.stats_bb_index);
router.get('/strongman/', statsController.stats_strong_index);
router.get('/styrkelyft/', statsController.stats_pwr_index);
router.get('/tyngdlyftning/', statsController.stats_oly_index);
router.get('/terminator/', statsController.stats_terminator_index);
//router.get('/:id', statsController.stats_year); // Unused

module.exports = router;