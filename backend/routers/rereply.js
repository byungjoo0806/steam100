const router = require('express').Router();

const { RereplyView, RereplyInsert, RereplyUpdate, RereplyDelete} = require('../controllers/rereplyController');

const { LoginCheck } = require('../middleware/loginCheck');

router.get('/', RereplyView);

router.post('/insert', LoginCheck, RereplyInsert);

router.put('/update', LoginCheck, RereplyUpdate);

router.delete('/delete', LoginCheck, RereplyDelete);

module.exports = router;