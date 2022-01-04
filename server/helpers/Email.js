const nodemailer = require('nodemailer');
require('dotenv').config()
const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: '25',
        auth : {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    })

    const mailOptions = {
        from : 'Aspen <contact@plants.io>',
        to : options.email,
        subject : options.subject,
        text : options.message
    }

    await transporter.sendMail(mailOptions)

}

module.exports = sendEmail;
// const nodemailer = require('nodemailer');

// const sendEmail = async (options) => {
//     const transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//     port: 587,
//     secure: false,
//     auth: {
    //   user: process.env.EMAIL,
    //   pass: process.env.PASSWORD,
//     },
//   });

//     const mailOptions = {
//         from : 'Plant Planner <aubree.baumbach67@ethereal.email>',
//         to : 'Plant <plantplanner26@gmail.com>',
//         subject : options.subject,
//         text : options.message
//     }

//     await transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
// })
    

// }

// module.exports = sendEmail;
