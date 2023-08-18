const router = require('express').Router();
const { RereplyView, RereplyInsert, RereplyUpdate, RereplyDelete} = require('../controllers/rereplyController');

router.post('/', RereplyView);

router.post('/insert', RereplyInsert);

router.post('/update', RereplyUpdate);

router.post('/delete', RereplyDelete);

module.exports = router;