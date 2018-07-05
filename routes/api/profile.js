const express = require('express');
const router = express.Router();

//@route          GET api/profile/test
//@description    Tests the profile route 
//@access         Public 
router.get('/test', (req, res) => res.json({
  msg: 'Profile is working'
}));

module.exports = router;