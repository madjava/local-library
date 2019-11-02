var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.get('/support', function(req, res) {
  res.render('support', { title: 'Support a Charity'});
});

module.exports = router;
 