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
            id : user.id,
            nickname : user.nickname,
            age : user.age,
            gender : user.gender
        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn : '1h'
        })

        res.cookie('token',token,{
            sameSite : 'none',
            secure : true
        })

        res.send({
            status : "로그인 성공",
            user : user
        });
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

exports.Logout = async(req,res) =>{
    try {
        const {token} = req;

        res.cookie('token', token, {
            expires: new Date(0),
            sameSite : 'none',
            secure : true
        });

        res.send('로그아웃 되었습니다.');
    } catch (error) {
        console.log('로그인 컨트롤러에서 로그아웃하다 에러남');
        console.log(error);
    }
}

//////////////////////////어드민//////////////////////////////

// 가입 승인 처리 컨트롤러
exports.FetchPendingUsers = async (req, res) => {
    try {
        const pendingUsers = await User.findAll({where: { access : 0 } })

        return res.json(pendingUsers);
    } catch (error) {
        console.log("로그인 컨트롤러에서 가입 승인하다가 에러남")
        console.log(error);
    }
}

// 유저 승인 로직
exports.ApproveUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findByPk(userId);

        if(!user) {
            return res.status(404).send( {message : "유저를 찾을 수 없음" });
        }

        user.access = 1;
        console.log(user.access);
        await user.save();

        res.send( {message: "유저 승인이 성공적으로 완료되었음"});
    } catch (error) {
        console.log("로그인 컨트롤러에서 사용자 승인하다가 에러남");
        console.log(error);
    }
}

// 유저 승인 거절 로직 (삭제 처리)
exports.RejectUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findByPk(userId);

        if(!user) {
            return res.status(404).send({message : "유저를 찾을 수 없음"});
        }

        await user.destroy();

        res.send({ message : "유저 승인 거절이 성공적으로 됐음"})
    } catch (error) {
        console.log("로그인 컨트롤러에서 유저 승인 거절 하다가 에러남");
        console.log(error);
    }
}