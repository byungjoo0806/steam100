const {Post, User} = require('../models');

exports.PostViewAll = async(req,res)=>{
    try {
        const post = await Post.findAll({
            include: [{
                model: User,
                attributes: ['nickname'] // 닉네임 가져올 수 있도록 설정
            }]
        });

        res.send(post);
    } catch (error) {
        console.log('포스트 컨트롤러에서 게시판 전체글 보여주다 에러남');
        console.log(error);
    }
}

exports.PostViewOne = async(req,res)=>{
    try {
        const {id} = req.params;
        const post = await Post.findOne({ where : { id } });
        res.send(post);
    } catch (error) {
        console.log('포스트 컨트롤러에서 게시판 상세글 보여주다 에러남');
        console.log(error);
    }
}

exports.PostInsert = async(req,res)=>{
    try {
        const {title, content, userId} = req.body;

        await Post.create({
            title,
            content,
            userId
        })

        res.send('http://localhost:3000');
    } catch (error) {
        console.log('포스트 컨트롤러에서 게시판 글 추가하다가 에러남');
        console.log(error);
    }
}

exports.PostUpdate = async(req,res)=>{
    try {
        const {title, content} = req.body;
        const { id } = req.params;

        await Post.update({
             title, 
             content
            },

            { where : { id } });

        res.send('http://localhost:3000');
    } catch (error) {
        console.log('포스트 컨트롤러에서 게시판 글 수정하다가 에러남');
        console.log(error);
    }
}

exports.PostDelete = async(req,res)=>{
    try {
        const { id } = req.params;
        console.log("있나", id);

        await Post.destroy({where : {id}});

        res.send('http://localhost:3000');
    } catch (error) {
        console.log('포스트 컨트롤러에서 게시판 글 삭제하다가 에러남');
        console.log(error);
    }
}