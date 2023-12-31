const Sequelize = require('sequelize');
const config = require('../config');
const User = require('./users');
const Post = require('./posts');
const Reply = require('./replys');
const Rereply = require('./rereplys');


const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db = {}

db.sequelize = sequelize;

db.User = User;
db.Post = Post;
db.Reply = Reply;
db.Rereply = Rereply;

User.init(sequelize);
Post.init(sequelize);
Reply.init(sequelize);
Rereply.init(sequelize);

User.associate(db);
Post.associate(db);
Reply.associate(db);
Rereply.associate(db);

module.exports = db;