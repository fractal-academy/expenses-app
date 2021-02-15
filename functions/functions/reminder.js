const functions = require('firebase-functions')
const admin = require('firebase-admin')

exports.reminder = functions.pubsub
  .schedule('every 5 hours')
  .onRun((context) => {
    console.log('This will be run every 5 hour!')
    return null
  })
