const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })
const nodemailerSendgrid = require('nodemailer-sendgrid')

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    let transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey:
          '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'
      })
    )
    // getting dest email
    const { email } = req.body.data
    const mailOptions = {
      from: 'Senseteq corp. <maks.27.04.2002@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
      to: email,
      subject: 'Invitation to Senseteq expenses app.', // email subject
      html: `<p style="font-size: 16px;">You was invited to Senseteq expenses app: <a href="https://expenses-app-development-9ba1c.web.app">Click here.</a></p>`
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ data: 'ok' })
    } catch (error) {
      if (error) {
        return res.json({ data: error.toString() })
      }
    }
  })
})
