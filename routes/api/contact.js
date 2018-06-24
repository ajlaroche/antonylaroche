const router = require("express").Router();
const nodemailer = require('nodemailer');
require("dotenv").config();
const keys = require("../../keys.js");

router.route("/")
    .post(
        function (req, res) {
            console.log(req.body);
            const message = `
            <p>You have a new contact request </p>
            <h3>Contact Details</h3>
            <ul>
                <li> Name: ${req.body.name}</li>
                <li> Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
            `;

            let transporter = nodemailer.createTransport({
                host: 'smtp.office365.com',
                port: 587,
                secure: false, // true for 465, false for other ports,
                auth: {
                    user: "antonylaroche@cmxventures.com",
                    pass: keys.cmxventures.PASS
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Nodemailer Contact" <antonylaroche@cmxventures.com>', // sender address
                to: 'antonylaroche@cmxventures.com, antony@larochefamily.net', // list of receivers
                subject: 'Nodemailer Test ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: message // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);

                res.sendStatus(200);
            });


        }
    );

module.exports = router;