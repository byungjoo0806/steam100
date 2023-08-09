const router = require('express').Router();

const {ViewUserInfo} = require('../controllers/mypageController');
const {LoginCheck} = require('../middleware/loginCheck');

router.get('/',LoginCheck,ViewUserInfo);

module.exports = router;