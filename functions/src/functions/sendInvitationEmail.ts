import * as functions from 'firebase-functions'
import * as nodemailer from 'nodemailer'
import * as nodemailerSendgrid from 'nodemailer-sendgrid'
const cors = require('cors')({ origin: true })

export default functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // [INTERFACES]
    const email: string = req.body.data.email

    // [COMPUTED_PROPERTIES]
    const transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: functions.config().sendgrid.key
      })
    )
    const emailTemplate = `<p style="font-size: 16px;">You was invited to Senseteq expenses app: <a href="${
      functions.config().config.host
    }">Click here.</a></p>`

    const mailOptions = {
      from: 'Senseteq corp. <maks.27.04.2002@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
      to: email,
      subject: 'Invitation to Senseteq expenses app.', // email subject
      html: emailTemplate
    }

    // [LOGIC]
    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ data: 'ok' })
    } catch (error) {
      return res.json({ data: error.toString() })
    }
  })
})
