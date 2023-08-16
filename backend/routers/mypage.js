const router = require('express').Router();

const {ViewUserInfo, ChangeUserInfo, ChangePassword} = require('../controllers/mypageController');
const {LoginCheck} = require('../middleware/loginCheck');

router.get('/',LoginCheck,ViewUserInfo);

router.post('/',LoginCheck,ChangeUserInfo);

router.post('/changePw',LoginCheck,ChangePassword);

module.exports = router;