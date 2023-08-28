const { Rereply, User, Reply} = require('../models');

exports.RereplyView = async (req, res) => {
    try {
        const replyId = req.query.replyId;
        const rereply = await Rereply.findAll({
            where : {replyId : replyId},
            include : 
                [{model : User}, {model : Reply}]
        })

        res.json(rereply);

    } catch (error) {
        console.log(error)
    }
}

exports.RereplyInsert = async (req, res) => {
    try {
        const {content, replyId, userId} = req.body;

        await Rereply.create({
            content,
            replyId,
            userId
        })

        const rereply = await Rereply.findOne({where : {replyId}, include : {model : Reply}});
        
        req.session.pageId = rereply.Reply.replyId;

        res.json({ replyId: rereply.replyId });

    } catch (error) {
        console.log(error);
    }
}

exports.RereplyUpdate = async (req, res) => {
    try {
        const { content, id } = req.body;

        const rereply = await Rereply.findOne({where : {id}, include : {model : Reply}});

        await Rereply.update({content}, {where : {id}});

        req.session.pageId = rereply.Reply.postId;

        res.send();
    } catch (error) {
        console.log(error);
    }
}

exports.RereplyDelete = async (req, res) => {
    try {
        const id = req.body.id;

        const rereply = await Rereply.findOne({where:{id}, include : {model : Reply}});

        req.session.pageId = rereply.Reply.postId;

        await Rereply.destroy({where : {id}});
        

        res.send()
    } catch (error) {
        console.log(error)
    }
}

exports.RereplyLikeChange = async (req, res) => {
    try {
        const {id} = req.params;
        const {acc_decoded} = req;

        const rereplyBefore = await Rereply.findOne({where: {id}});

        let rereplyLike = rereplyBefore.rereplyLikes.split(',');
        let changeLike = '';
        let clickUser = acc_decoded.id.toString();
        
        if(rereplyLike.includes(clickUser)){
            rereplyLike.splice(rereplyLike.indexOf(clickUser), 1);
        }else {
            rereplyLike.push(clickUser);
        }

        changeLike = rereplyLike.join(',');

        await Rereply.update({rereplyLikes : changeLike}, {where : {id}});

        const rereply = await Rereply.findOne({where : {id}});

        res.send(rereply);
    } catch (error) {
        console.log('리리플 컨트롤러에서 대댓글 좋아요 변경하다 에러남');
        console.log(error);
    }
}