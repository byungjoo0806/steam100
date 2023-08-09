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

        if(user.access == 0){
            return res.send('가입 승인 대기 중입니다.');
        }

        const token = jwt.sign({
            nickname : user.nickname,
            age : user.age,
            gender : user.gender
        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn : '1h'
        })

        req.session.token = token;

        res.send('로그인 성공');
    } catch (error) {
        console.log('로그인 컨트롤러에서 로그인 하다 에러남');
        console.log(error);
    }
}

// 어드민 계정 존재 유무 확인 후 필요 시 생성
exports.Admin = async(req,res)=>{
    try {
        const user_id = 'admin';
        const user_pw = 'admin123';
        const nickname = 'administer';
        const access = 2;

        const hash = bcrypt.hashSync(user_pw,10);

        const admin = await User.findOne({where : {user_id}});

        if(admin == null){
            await User.create({
                user_id,
                user_pw : hash,
                nickname,
                access
            })
        }

        res.send();
    } catch (error) {
        console.log('로그인 컨트롤러에서 어드민 계정 만들다 에러남');
        console.log(error);
    }
}