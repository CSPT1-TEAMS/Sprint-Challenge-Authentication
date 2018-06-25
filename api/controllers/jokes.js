const fetch = require('node-fetch');

const getAllJokes = (req, res) => {
  if (req.decoded) {
    fetch(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
      .then(p => p.json())
      .then(jokes => res.json(jokes))
      .catch(err => res.status(500).json({ err: 'error fetching jokes'}));
  } else {
    return res.status(422).json({ error: "unable to access jokes"});
  }
};

module.exports = {
  getAllJokes
};