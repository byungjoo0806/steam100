const router = require('express').Router();

const { ReplyViewAll, ReplyInsert, ReplyUpdate, ReplyDelete } = require('../controllers/replyController');

const { LoginCheck } = require('../middleware/loginCheck');

router.get('/', ReplyViewAll);

router.post('/insert', LoginCheck, ReplyInsert);

router.put('/update', LoginCheck, ReplyUpdate);

router.delete('/delete', LoginCheck, ReplyDelete);

module.exports = router;