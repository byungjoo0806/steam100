const Sequelize = require('sequelize');

class Post extends Sequelize.Model{
    static init(seq){
        return super.init({
            gameTitle : {
                type : Sequelize.STRING(100),
                allowNull : false
            },
            title : {
                type : Sequelize.STRING(30),
                allowNull : false
            },
            content : {
                type : Sequelize.STRING(256),
                allowNull : false
            }
        },{
            sequelize : seq,
            timestamps : true,
            underscored : false,
            modelName : 'Post',
            tableName : 'posts',
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci'
        })
    }
}

module.exports = Post;