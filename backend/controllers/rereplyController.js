const { Rereply, User, Reply} = require('../models');

exports.RereplyView = async (req, res) => {
    try {
        const id = req.body.data;
        const rereply = await Rereply.findAll({
            where : {replyId : id},
            include : {
                model : User,
                model : Reply
            }
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

        req.session.pageId = rereply.Reply.postId;

        res.send('http://localhost:3000');
    } catch (error) {
        console.log(error);
    }
}

exports.RereplyUpdate = async (req, res) => {
    try {
        const {content, id} = req.body;

        const rereply = await Rereply.findOne({where : {id}, include : {model : Reply}});

        req.session.pageId = rereply.Reply.postId;

        await Rereply.update({content}, {where : {id}});

        res.send('http://localhost:3000');
    } catch (error) {
        console.log(error);
    }
}

exports.RereplyDelete = async (req, res) => {
    try {
        const id = req.body.data;

        const rereply = await Rereply.findOne({where:{id}, include : {model : Reply}});

        req.session.pageId = rereply.Reply.postId;

        await Rereply.destroy({where : {id}});

        res.send('http://localhost:3000')
    } catch (error) {
        console.log(error)
    }
}