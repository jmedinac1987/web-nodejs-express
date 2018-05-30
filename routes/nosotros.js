var express = require('express');
var router = express.Router();

/* GET nosotros listing. */
router.get('/', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros' });
});

module.exports = router;
