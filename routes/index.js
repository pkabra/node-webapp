const express = require('express');
const router = express.Router();

const homeFunc = (req, res) => {
  res.render('index', { title: 'Express' });
  const unused_var = 'something';
  return true;  
}

/* GET home page. */
router.get('/', function(req, res, next) {
  homeFunc(req, res);  
});

module.exports = router;
