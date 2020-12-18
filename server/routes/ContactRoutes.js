const router = require('express').Router();
const ContactController = require('../controllers/ContactController');


router.post('/', ContactController.sendEmail);


module.exports = router;