const Sequelize = require('sequelize');

class User extends Sequelize.Model{
    static init(seq){
        return super.init({
            user_id : {
                type : Sequelize.STRING(20),
                allowNull : false
            },
            user_pw : {
                type : Sequelize.STRING(64),
                allowNull : false
            },
            nickname : {
                type : Sequelize.STRING(20),
                allowNull : false
            },
            age : {
                type : Sequelize.INTEGER,
                allowNull : false,
                defaultValue : 15,
            },
            gender : {
                type : Sequelize.STRING(10),
                allowNull : false,
                defaultValue : 'male'
            },
            access : {
                type : Sequelize.STRING(10),
                defaultValue : 'No'
            }
        },{
            sequelize : seq,
            timestamps : true,
            underscored : false,
            modelName : 'User',
            tableName : 'users',
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci'
        })
    }
}

module.exports = User;