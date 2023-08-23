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

        res.send();
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

        res.send();
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

        res.send();
    } catch (error) {
        console.log('포스트 컨트롤러에서 게시판 글 삭제하다가 에러남dsaadsdas');
        console.log(error);
    }
}

exports.PostViewNumUp = async(req,res)=>{
    try {
        const { id } = req.params;

        const post = await Post.findOne({where : {id}});

        await Post.update({postViews : post.postViews + 1},{where : {id}});

        res.send();
    } catch (error) {
        console.log('포스트 컨트롤러에서 게시판 글 조회수 올리다 에러남');
        console.log(error);
    }
}

exports.PostLikeChange = async(req,res)=>{
    try {
        const {id} = req.params;
        const {acc_decoded} = req;

        const postBefore = await Post.findOne({where : {id}});

        let postLike = postBefore.postLikes.split(',');
        let changeLike = '';
        let clickUser = acc_decoded.id.toString();

        if(postLike.includes(clickUser)){
            postLike.splice(postLike.indexOf(clickUser),1);
        }else{
            postLike.push(clickUser);
        }

        changeLike = postLike.join(',');

        await Post.update({postLikes : changeLike},{where : {id}});

        const post = await Post.findOne({where : {id}});

        res.send(post);
    } catch (error) {
        console.log('포스트 컨트롤러에서 게시판 글 좋아요 변경하다 에러남');
        console.log(error);
    }
}