const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Login = async(req,res) => {
    try {
        const {user_id,user_pw} = req.body;

        const user = await User.findOne({where : {user_id}});

        if(user == null){
            return res.send('아이디가 존재하지 않습니다.');
        }

        const compare = bcrypt.compareSync(user_pw,user.user_pw);

        if(!compare){
            return res.send('비밀번호가 일치하지 않습니다.');
        }

        const token = jwt.sign({
            nickname : user.nickname,
            age : user.age,
            gender : user.gender
        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn : '1h'
        })

        req.session.token = token;

        res.send();
    } catch (error) {
        console.log('로그인 컨트롤러에서 로그인 하다 에러남')
        console.log(error);
    }
}