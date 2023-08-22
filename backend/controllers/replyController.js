const { Reply, User } = require('../models');

exports.ReplyViewAll = async (req, res) => {
    try {
        const id = req.body.data;
        const reply = await Reply.findAll({
            where : { postId : id },
            include : {
                model : User
            }
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
            uesrId
        })

        req.session.pageId = postId; //  ??? 

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

        req.session.pageId = reply.postId; // ???

        res.send()
    } catch (error) {
        console.log(error);
    }
}

exports.ReplyDelete = async (req, res) => {
    try {
        const id = req.body.data;
        
        const reply = await Reply.findOne({where:{id}});

        req.session.pageId = reply.postId;

        await Reply.destroy({where : {id}});

        res.send()
    } catch (error) {
        console.log(error)
    }
}