const Participants = require('../models/participants.models')

const findParticipantInConversation = async (userId, conversationId) => {
  const data = await Participants.findOne({
    where: {
      userId: userId,
      conversationId: conversationId
    }
  })
  return data
}

module.exports = {
  findParticipantInConversation
}