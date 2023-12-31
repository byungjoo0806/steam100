const { Reply, User, Post, Rereply } = require('../models');

exports.ReplyViewAll = async (req, res) => {
    try {
        const postId = req.query.postId;
        const reply = await Reply.findAll({
            where : { postId : postId },
            include : [
                {model : User},{model : Post} ,{model : Rereply}
            ]
        })
        res.json(reply);

    } catch (error) {
        console.log(error);
    }
}

exports.ReplyInsert = async (req, res) => {
    try {
        const { content, postId, userId } = req.body;

        await Reply.create({
            content,
            postId,
            userId
        })

        req.session.pageId = postId; 

        res.send()

    } catch (error) {
        console.log(error);
    }
}

exports.ReplyUpdate = async (req, res) => {
    try {
        const { content, id } = req.body;

        const reply = await Reply.findOne({where : {id}});

        await Reply.update({content}, {where : {id}});

        req.session.pageId = reply.postId; 

        res.send()
    } catch (error) {
        console.log(error);
    }
}

exports.ReplyDelete = async (req, res) => {
    try {
        const id = req.body.id;
        const reply = await Reply.findOne({where:{id}});
        
        req.session.pageId = reply.postId;

        await Reply.destroy({where : {id}});

        res.send()
    } catch (error) {
        console.log(error)
    }
}

exports.ReplyLikeChange = async (req, res) => {
    try {
        const {id} = req.params;
        const {acc_decoded} = req;

        const replyBefore = await Reply.findOne({where: {id}});

        let replyLike = replyBefore.replyLikes.split(',');
        let changeLike = '';
        let clickUser = acc_decoded.id.toString();
        
        if(replyLike.includes(clickUser)){
            replyLike.splice(replyLike.indexOf(clickUser), 1);
        }else {
            replyLike.push(clickUser);
        }

        changeLike = replyLike.join(',');

        await Reply.update({replyLikes : changeLike}, {where : {id}});

        const reply = await Reply.findOne({where : {id}});

        res.send(reply);
    } catch (error) {
        console.log('리플 컨트롤러에서 댓글 좋아요 변경하다 에러남');
        console.log(error);
    }
}