const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })
const nodemailerSendgrid = require('nodemailer-sendgrid')

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    let transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: functions.config().sendgrid.key
      })
    )
    // getting dest email
    const { email } = req.body.data
    const mailOptions = {
      from: 'Senseteq corp. <maks.27.04.2002@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
      to: email,
      subject: 'Invitation to Senseteq expenses app.', // email subject
      html: `<p style="font-size: 16px;">You was invited to Senseteq expenses app: <a href="${
        functions.config().config.host
      }">Click here.</a></p>`
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
