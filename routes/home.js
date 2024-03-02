const express = require('express');
const router = express.Router();
const home_controller = require('../controllers/homeController');

router.get('/', home_controller.home_get);

module.exports = router;