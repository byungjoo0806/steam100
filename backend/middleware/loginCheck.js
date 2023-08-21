const jwt = require('jsonwebtoken');

exports.LoginCheck = (req,res,next)=>{
    try {
        const access_token = req.cookies.token;

        jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,acc_decoded)=>{
            if(err){
                res.send('세션 만료. 다시 로그인해주세요.');
            }else{
                req.acc_decoded = acc_decoded;
                req.token = access_token;
                next();
            }
        })
    } catch (error) {
        console.log('토큰 체크 미들웨어에서 토큰 유효성 검사하다가 에러남');
        console.log(error);
    }
}