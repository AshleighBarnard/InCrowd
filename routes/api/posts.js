const express = require('express');
const router = express.Router();

//@route          GET api/posts/test
//@description    Tests the post route 
//@access         Public 
router.get('/test', (req, res) => res.json({
  msg: 'Posts is working'
}));

module.exports = router;