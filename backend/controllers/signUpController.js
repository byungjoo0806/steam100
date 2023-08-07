const {User} = require('../models');
const bcrypt = require('bcrypt');

exports.SignUp = async(req,res)=>{
    try {
        const {user_id,user_pw,nickname,age,gender} = req.body;

        const user = await User.findOne({where : {user_id}});

        if(user != null){
            return res.send('아이디가 이미 존재합니다.');
        }

        const hash = bcrypt.hashSync(user_pw,10);

        await User.create({
            user_id,
            user_pw : hash,
            nickname,
            age,
            gender
        })

        res.send('가입 신청이 완료되었습니다.');
    } catch (error) {
        console.log('사인업 컨트롤러에서 가입하다 에러남');
        console.log(error);
    }
}