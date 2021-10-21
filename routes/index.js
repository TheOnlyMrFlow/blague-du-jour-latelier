var express = require('express');
var router = express.Router();

const BlaguesAPI = require('blagues-api');

const blagues = new BlaguesAPI(process.env.BLAGUE_API_KEY);

/* GET home page. */
router.post('/', async (req, res, next) => {
  var blagueJson = await blagues.random();
  var blaguePretty = blagueJson.joke + "\r\n" + blagueJson.answer;

  res.json(  
    {
      response_type: "in_channel",
      text: blaguePretty
    })
});

module.exports = router;
