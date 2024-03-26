const router = require('express').Router();
const {sendMessage, sendCallBackMessage } = require('../controllers/messages')

router.post('/mail', sendMessage)
router.post('/cb', sendCallBackMessage)

module.exports = router;