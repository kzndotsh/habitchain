const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const completionRoutes = require('./completions');

router.use(authRoutes);
router.use(completionRoutes);

module.exports = router;
