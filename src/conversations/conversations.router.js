const router = require('express').Router()
const passportJWT = require('../middlewares/auth.middleware')
const conversationServices = require('./conversations.services')
const messageServices = require('../messages/messages.services')
const participantValidate = require('../middlewares/participantValidate.middleware')

router.route('/')
  .get(passportJWT.authenticate('jwt', {session: false}) , conversationServices.getAllMyConversations)
  .post(passportJWT.authenticate('jwt', {session: false}) , conversationServices.postConversation)

router.route('/:conversation_id')
  .get(passportJWT.authenticate('jwt', {session: false}) , conversationServices.getConversationById)
  .post(passportJWT.authenticate('jwt', {session: false}) , conversationServices.postParticipant)
  .patch(passportJWT.authenticate('jwt', {session: false}) , conversationServices.patchConversation)
  .delete(passportJWT.authenticate('jwt', {session: false}) , conversationServices.deleteConversation)

  router.route('/:conversation_id/messages')
  .post(passportJWT.authenticate('jwt', {session: false}), participantValidate , messageServices.postMessage)

module.exports = router