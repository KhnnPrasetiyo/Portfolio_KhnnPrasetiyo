const express = require('express');

const router = express.Router();
const userController = require('../../controllers/userController')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/kirim-pesan', userController.sendEmail)
router.post('/subscribe', userController.sendMailSubs)

module.exports = router;
