const express = require('express')
const router = express.Router()

// CONTROLLERS //
const homeController = require('./controllers/homeController.js');

// ROUTES //
router.get("/", homeController.g_home);

module.exports = router