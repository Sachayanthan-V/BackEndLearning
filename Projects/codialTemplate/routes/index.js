const express = require('express');
const router = express.Router();
const homeController = require('./../controllers/home_controller');

// imports {some} for {specific routing through requrie}


console.log(`Index Router is loaded!...`);

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));


module.exports = router;