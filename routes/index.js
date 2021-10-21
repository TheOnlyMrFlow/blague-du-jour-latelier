var express = require('express');
var router = express.Router();

const BlaguesAPI = require('blagues-api');

const blagues = new BlaguesAPI(process.env.BLAGUE_API_KEY);

/* GET home page. */
router.get('/', async (req, res, next) => {
  var blagueJson = await blagues.random();
  var blaguePretty = blagueJson.joke + "\r\n" + blagueJson.answer;
  res.send(blaguePretty);
});

module.exports = router;
