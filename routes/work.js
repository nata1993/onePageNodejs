const express = require('express');
const itemsController = require('../controllers/workItems');
const router = express.Router();

router.get('/work', itemsController.getWorkPage);
router.post('/work', itemsController.postWorkItem);

module.exports = router;