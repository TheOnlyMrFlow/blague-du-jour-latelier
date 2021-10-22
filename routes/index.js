var express = require('express');
var router = express.Router();

const BlaguesAPI = require('blagues-api');

const blaguesApi = new BlaguesAPI(process.env.BLAGUE_API_KEY);

/* GET home page. */
router.post('/', async (req, res, next) => {
  const rawQuery = req.body.text;

  const numberOfJokes = rawQuery ? parseInt(rawQuery) : 1;

  const blagues = await Promise.all([...Array(numberOfJokes)].map(async () => {
    const blagueJson = await blaguesApi.random();

    return blagueJson.joke + "\r\n" + blagueJson.answer;
  }));

  res.json(  
    {
      response_type: "in_channel",
      text: blagues.join("\r\n\r\n")
    })
});

module.exports = router;
