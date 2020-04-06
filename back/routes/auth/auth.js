var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  res.send('Home page for auth');
});

router.post('/', function (req, res, next) {
  /*   res.send('I am in POST signup'); */
  const formData = req.body;
  connection.query('INSERT INTO users SET ?', formData, (err, results) => {
    if (err) {
      // If an error has occurred, then the user is informed of the error
      console.log(err);
      res.status(500).send('Error saving an user');
    } else {
      // If everything went well, we send a status "ok".
      res.sendStatus(200);
    }
  });
});

module.exports = router;
