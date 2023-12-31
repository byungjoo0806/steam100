const Sequelize = require('sequelize');

class Reply extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            content : {
                type : Sequelize.STRING(256),
            },
            replyLikes: {
                type : Sequelize.STRING(256),
                defaultValue : ''
            }
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : "Reply",
            tableName : "replys",
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci'
        })
    }

    static associate(db){
        db.Reply.belongsTo(db.User, { foreignKey : "userId", targetKey : "id"});
        db.Reply.belongsTo(db.Post, {foreignKey : "postId", targetKey : "id"});
        db.Reply.hasMany(db.Rereply, { foreignKey : "replyId", sourceKey : "id"})
    }
}

module.exports = Reply;