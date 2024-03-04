const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET for user');
});

module.exports = router;
