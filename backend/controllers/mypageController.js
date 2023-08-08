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

        const user = await User.update({nickname,age,gender},{where : {id : acc_decoded.id}});

        res.send(user);
    } catch (error) {
        console.log('마이페이지 컨트롤러에서 유저 정보 변경하다가 에러남');
        console.log(error);
    }
}