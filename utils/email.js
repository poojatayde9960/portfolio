const nodeMailer = require("nodemailer")

exports.sendEmail = ({ to, subject, message }) => new Promise((resolve, reject) => {
    const mailer = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            pass: process.env.EMAIL_PASS,
            user: process.env.FROM_EMAIL

        }
    })
    mailer.sendMail({
        to: to,
        subject: subject,
        text: message
    }, (err) => {
        if (err) {
            reject("User to send Email" + err.message)

        }
        console.log("Email Send Success")
        resolve(true)
    })
})