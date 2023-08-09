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

        const targetUser = await User.findOne({where : {id : acc_decoded.id}});

        const nick = await User.findOne({where : {nickname}});

        if(targetUser.nickname != nickname){
            if(nick != null){
                return res.send('이미 사용중인 닉네임입니다.');
            }
        }

        const msg = '개인 정보 변경이 완료 되었습니다.';

        await User.update({nickname,age,gender},{where : {id : acc_decoded.id}});

        const user = await User.findOne({where : {id : acc_decoded.id}});

        const data = {user, msg}

        res.send(data);
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

        res.send('비밀 번호 변경이 완료되었습니다.');
    } catch (error) {
        console.log('마이페이지 컨트롤러에서 비밀 번호 변경하다가 에러남');
        console.log(error);
    }
}