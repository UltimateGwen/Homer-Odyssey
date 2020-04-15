const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');

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
      // If everything went well, send a status that says "ok".
      res.send('Success');
    }
  });
});

router.post('/signin', function (req, res, next) {
  res.send('I am in POST signin');
});

module.exports = router;
