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