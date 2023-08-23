const router = require('express').Router();

const {PostDelete,PostInsert,PostUpdate,PostViewAll,PostViewOne,PostViewNumUp} = require('../controllers/postController');

const {LoginCheck} = require('../middleware/loginCheck');

router.get('/',PostViewAll);

router.get('/detail/:id',PostViewOne);

router.post('/insert',LoginCheck,PostInsert);

router.put('/update/:id',LoginCheck,PostUpdate);

router.delete('/delete/:id',LoginCheck,PostDelete);

router.get('/viewUp/:id',PostViewNumUp);

module.exports = router;