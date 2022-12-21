const messagesControllers = require('./messages.controllers')

const postMessage = (req, res) => {
  const userId = req.user.id
  const conversationId = req.params.conversation_id
  const { message } = req.body
  messagesControllers.createMessage({ userId, conversationId, message })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(400).json({ message: err.message, fields: {
      message: 'text'
    } }))
}

const getConversationMessages = (req, res) => {
  const id = req.params.id
  messagesControllers.findConversationMessages(id)
    .then(data => {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: `Conversation with ID ${id} not found` })
      }
    })
    .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
  postMessage,
  getConversationMessages
}
