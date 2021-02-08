const admin = require('firebase-admin')
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })
const nodemailerSendgrid = require('nodemailer-sendgrid')
admin.initializeApp()
let transporter = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey:
      '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'
  })
)

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // getting dest email by query string
    const { email } = req.body.data
    const mailOptions = {
      from: 'Senseteq corp. <maks.27.04.2002@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
      to: email,
      subject: 'Invitation to Senseteq expenses app.', // email subject
      html: `<p style="font-size: 16px;">You was invited to Senseteq expenses app: <a href="https://expenses-app-development-9ba1c.web.app">Click here.</a></p>`
    }

    transporter
      .sendMail(mailOptions)
      .then((info) => {
        res.end()
        return res.status(200).json({ hello: 'world' })
      })
      .catch((erro) => {
        if (erro) {
          return res.send(erro.toString())
        }
      })
  })
})
