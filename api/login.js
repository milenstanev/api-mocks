var express = require('express');
var router = express.Router();
var casual = require('casual');

router.post('/login', function(req, res, next) {
  var uuid = casual.uuid;

  res.setHeader('x-auth-token', uuid);
  res.send(uuid);
});

module.exports = router;