const router = require('express').Router();

const {ViewUserInfo, ChangeUserInfo} = require('../controllers/mypageController');
const {LoginCheck} = require('../middleware/loginCheck');

router.get('/',LoginCheck,ViewUserInfo);

router.post('/',LoginCheck,ChangeUserInfo);

module.exports = router;