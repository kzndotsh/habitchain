const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

// simulating a single user system
const user = {
  id: 1, // Unique identifier for the user
  username: "singleuser" // a placeholder username
};

router.post('/login', (req, res) => {
  // In a real application, you would verify user credentials.
  // But since this is a single user system we just sign the token
  const accessToken = jwt.sign(user, process.env.JWT_SECRET);
  res.json({ accessToken });
});

module.exports = router;
