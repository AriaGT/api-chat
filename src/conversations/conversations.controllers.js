const uuid = require('uuid')
const Conversations = require('../models/conversations.models')
const Participants = require('../models/participants.models')
const Users = require('../models/users.models')

const findMyConversations = async (id) => {
  const data = await Conversations.findAll({
    where: {
      userId: id
    },
    include: {
      model: Participants,
      include: {
        model: Users
      }
    }
  })
  return data
}

const findConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
      id: id
    },
    include: {
      model: Participants,
      include: {
        model: Users
      }
    }
  })
  return data
}

const updateConversation = async (id, obj) => {
  const data = await Conversations.update(obj, {
    where: {
      id: id
    }
  })
  return data[0]
}

const removeConversation = async (id) => {
  const data = await Conversations.destroy({
    where:{
      id: id
    }
  })
  return data
}

const createConversation = async (obj) => {
  const newConversation = await Conversations.create({
    id: uuid.v4(),
    title: obj.title,
    imgUrl: obj.imgUrl,
    userId: obj.userId
  })
  const participant1 = await Participants.create({
    id: uuid.v4(),
    userId: obj.userId,
    conversationId: newConversation.id
  })
  const participant2 = await Participants.create({
    id: uuid.v4(),
    userId: obj.participantId,
    conversationId: newConversation.id
  })
  return {
    newConversation,
    participant1,
    participant2
  }
}

const addParticipant = async (obj) => {
  const newParticipant = await Participants.create({
    id: uuid.v4(),
    userId: obj.userId,
    conversationId: obj.conversationId
  })
  return newParticipant
}

module.exports = {
  findMyConversations,
  findConversationById,
  updateConversation,
  removeConversation,
  createConversation,
  addParticipant
}