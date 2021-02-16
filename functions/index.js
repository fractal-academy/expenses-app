const functions = require('./functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.sendMail = functions.sendMail
exports.deleteUser = functions.deleteUser
exports.reminder = functions.reminder
