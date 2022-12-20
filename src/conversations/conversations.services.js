const conversationControllers = require('./conversations.controllers')

const getAllMyConversations = (req, res) => {
  const id = req.user.id
  conversationControllers.findMyConversations(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message}))
}

const postConversation = (req, res) => {
  const { title, imgUrl, participantId } = req.body
  const userId = req.user.id
  conversationControllers.createConversation({ title, imgUrl, participantId, userId })
    .then(data => {
      if(data) {
        res.status(201).json(data)
      } else {
        res.status(res.status(400).json({ message: 'Invalid Data', fields: {
          title: 'String',
          imgUrl: 'URL',
          participantId: 'UUID'
        } }))
      }
    })
    .catch(err => res.status(400).json({ message: err.message }))
}

const getConversationById = (req, res) => {
  const conversationId = req.params.conversation_id
  conversationControllers.findConversationById(conversationId)
    .then(data => {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: "Invalid ID" })
      }
    })
    .catch(err => res.status(400).json({ message: err.message}))
}

const patchConversation = (req, res) => {
  const conversationId = req.params.conversation_id
  const {title, imageUrl} = req.body
  conversationControllers.updateConversation(conversationId, {title, imageUrl})
  .then(data => {
    if(data) {
      res.status(200).json({ message: `Conversation with id ${conversationId} was updated!`})
    } else {
      res.status(res.status(400).json({ message: 'Invalid ID' }))
    }
  })
  .catch(err => res.status(400).json({ message: err.message }))
}

const deleteConversation = (req, res) => {
  const conversationId = req.params.conversation_id
  conversationControllers.removeConversation(conversationId)
    .then(data => {
      if (data) {
        res.status(204).json()
      } else {
        res.status(404).json({ message: "Invalid ID" })
      }
    })
    .catch(err => res.status(400).json({ message: err.message}))
}

const postParticipant = (req, res) => {
  const { userId } = req.body
  const conversationId = req.params.conversation_id
  conversationControllers.addParticipant({ userId, conversationId })
    .then(data => {
      if(data) {
        res.status(201).json({data})
      } else {
        res.status(400).json({ message: 'Invalid Data' })
      }
    })
    .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
  getAllMyConversations,
  getConversationById,
  patchConversation,
  deleteConversation,
  postConversation,
  postParticipant
}