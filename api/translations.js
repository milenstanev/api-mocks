var express = require('express');
var router = express.Router();
var casual = require('casual');

router.get('/svc/translations', function(req, res, next) {
  res.json({
    asd: 'Asd'
  });
});

module.exports = router;