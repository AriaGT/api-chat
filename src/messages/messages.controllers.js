const Messages = require('../models/messages.models')
const uuid = require('uuid')

const createMessage = async (obj) => {
  const data = await Messages.create({
    id: uuid.v4(),
    userId: obj.userId,
    conversationId: obj.conversationId,
    message: obj.message
  })
  return data
}

const findConversationMessages = async (id) => {
  const data = await Messages.findAll({
    where: {
      id: id
    }
  })
}

module.exports = {
  createMessage,
  findConversationMessages
}
