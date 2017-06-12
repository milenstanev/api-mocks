var express = require('express');
var router = express.Router();
var casual = require('casual');

router.use(require('./login'));
router.use(require('./translations'));
router.use(require('./currencyList'));

module.exports = router;
