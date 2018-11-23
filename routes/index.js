var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api', function(req, res, next) {
  console.log(req.query)
  res.json({
    msg:'success'
  })
});
router.post('/api', function(req, res, next) {
  res.json({
    msg:req.body
  })
});
module.exports = router;
