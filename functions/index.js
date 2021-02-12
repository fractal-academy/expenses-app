const sendMail = require('./sendInvitationEmail').sendMail
const deleteUser = require('./deleteUser').deleteUser
const admin = require('firebase-admin')

admin.initializeApp()

exports.sendMail = sendMail
exports.deleteUser = deleteUser
