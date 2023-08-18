const router = require('express').Router();

const {PostDelete,PostInsert,PostUpdate,PostViewAll,PostViewOne, PostViewNickname} = require('../controllers/postController');

const {LoginCheck} = require('../middleware/loginCheck');

router.get('/',PostViewAll);

router.post('/detail',PostViewOne);

router.post('/insert',LoginCheck,PostInsert);

router.post('/update',LoginCheck,PostUpdate);

router.post('/delete',LoginCheck,PostDelete);

module.exports = router;