const sendMail = require('./sendInvitationEmail').sendMail
const deleteUser = require('./deleteUser').deleteUser
const reminder = require('./reminder').reminder

module.exports = { sendMail, deleteUser, reminder }
