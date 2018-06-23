const fetch = require('node-fetch');
const {tokenValue} = require('./login');
const getAllJokes = (req, res) => {
  if (req.decoded) {
    fetch(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    ,
    // {headers: {Authorization: tokenValue}
    //   // headers: new Headers({
    //   //   'Authorization': localStorage.getItem('token')
    //   // })
    // }
    
  
  
  )
      .then(p => p.json())
      .then(jokes => res.json(jokes))
      .catch(err => res.status(500).json({ error: 'Error Fetching Jokes' }));
  } else {
    return res.status(422).json({ error: `Can't get these jokes!` });
  }
};

module.exports = {
  getAllJokes
};
