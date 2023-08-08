const router = require('express').Router();

const {Login,Admin} = require('../controllers/loginController');

router.post('/',Login);

router.get('/',Admin);

module.exports = router;