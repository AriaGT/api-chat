const Users = require('./users.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')
const Conversations = require('./conversations.models')

const initModels = () => {
    Users.hasMany(Messages)
    Messages.belongsTo(Users)

    Users.hasMany(Conversations)
    Conversations.belongsTo(Users)

    Users.hasMany(Participants)
    Participants.belongsTo(Users)

    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)

    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)
}

module.exports = initModels