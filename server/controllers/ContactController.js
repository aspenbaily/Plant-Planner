const sendEmail = require("../helpers/Email");

exports.sendEmail = async (req ,res) => {

    await sendEmail({
        email : req.body.email,
        subject : `Message from ${req.body.firstName} ${req.body.lastName}`,
        message : req.body.message,
    })

    res.status(200).json({
        message :'Message sent'
    });
}