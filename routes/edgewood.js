const express = require('express');
const router = express.Router();
const edgewood_controller = require('../controllers/edgewoodController');

router.get('/alerts', edgewood_controller.get_all_alerts);

router.post('/alerts', edgewood_controller.new_alert);

router.get('/alerts/recent', edgewood_controller.get_recent_alert)

module.exports = router;