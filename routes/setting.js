const express = require('express');
const router = express.Router();
const { setGlobalEarningLimit } = require('../controllers/settingController');
const authMiddleware = require('../middlewares/authMiddleware');

router.put('/globalEarningLimit', authMiddleware, setGlobalEarningLimit);

module.exports = router;