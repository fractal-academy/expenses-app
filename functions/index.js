const admin = require('firebase-admin')
const { sendInvitationEmail } = require('./sendInvitationEmail')
const { deleteUser } = require('./deleteUser')
admin.initializeApp()

exports.deleteUser = deleteUser
exports.sendMail = sendInvitationEmail
