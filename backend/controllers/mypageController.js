const {User} = require('../models');
const bcrypt = require('bcrypt');

exports.ViewUserInfo = async(req,res)=>{
    try {
        const {acc_decoded} = req;

        const user = await User.findOne({where : {nickname : acc_decoded.nickname}});

        res.send(user);
    } catch (error) {
        console.log('마이페이지 컨트롤러에서 유저 정보 불러오다가 에러남');
        console.log(error);
    }
}

exports.ChangeUserInfo = async(req,res)=>{
    try {
        const {acc_decoded} = req;
        const {nickname,age,gender} = req.body;
        console.log(acc_decoded)

        await User.update({nickname,age,gender},{where : {id : acc_decoded.id}});

        const user = await User.findOne({where : {id : acc_decoded.id}});

        res.send(user);
    } catch (error) {
        console.log('마이페이지 컨트롤러에서 유저 정보 변경하다가 에러남');
        console.log(error);
    }
}

exports.ChangePassword = async(req,res)=>{
    try {
        const {acc_decoded} = req;
        const {currentPw,changePw} = req.body;

        const user = await User.findOne({where : {id : acc_decoded.id}});

        const compare = bcrypt.compareSync(currentPw,user.user_pw);

        if(!compare){
            return res.send('비밀번호가 틀립니다. 다시 확인해주세요.');
        }

        const hash = bcrypt.hashSync(changePw,10);

        await User.update({user_pw : hash},{where : {id : user.id}});

        res.send('변경이 완료되었습니다.');
    } catch (error) {
        console.log('마이페이지 컨트롤러에서 비밀 번호 변경하다가 에러남');
        console.log(error);
    }
}