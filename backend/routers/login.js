const router = require('express').Router();

const {Login, Admin, FetchPendingUsers, ApproveUser, RejectUser, Logout} = require('../controllers/loginController');

const {LoginCheck} = require('../middleware/loginCheck');

router.post('/',Login);

router.get('/',Admin);

router.get('/pendingUsers', FetchPendingUsers);

router.put('/pendingUsers/:userId', ApproveUser);

router.delete('/pendingUsers/:userId', RejectUser);

router.get('/logout',LoginCheck, Logout);

module.exports = router;