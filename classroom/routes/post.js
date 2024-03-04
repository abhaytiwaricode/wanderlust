const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('POST for post');
});

module.exports = router;
