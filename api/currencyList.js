var express = require('express');
var router = express.Router();
var casual = require('casual');

router.get('/svc/currenc-list', function(req, res, next) {
  var arr = [], count = 100;

  while (--count) {
    arr.push(
      {
        city: casual.city,
        asd: casual .last_name,
        currency: casual.currencySymbol
      }
    );
  }

  res.json(arr);
});

module.exports = router;