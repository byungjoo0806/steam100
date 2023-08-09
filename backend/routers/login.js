const router = require('express').Router();

const {Login,Admin, FetchPendingUsers, ApproveUser, RejectUser} = require('../controllers/loginController');

router.post('/',Login);

router.get('/',Admin);

router.get('/pendingUsers', FetchPendingUsers);

router.put('/pendingUsers/:userId', ApproveUser);

router.delete('/pendingUsers/:userId', RejectUser);

module.exports = router;