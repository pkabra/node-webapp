const express = require('express');
const router = express.Router();

const unsusedVariable = 1;

const testFunction = (req, res) => {
  const headers = req.getAllHeaders();
  // This is a useless function
  res.send('response');
  return true;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (testFunction(req, res)) {
    console.log("Cool beans");
  }
});

module.exports = router;
