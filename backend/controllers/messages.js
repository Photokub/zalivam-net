const Message = require('../models/message')
const nodemailer = require("nodemailer");

const postMessage = async (req, res, next) => {
    try {
        const message = await Message.create({ ...req.body });
        return res.status(201).send(message);
    } catch (err) {
        return next(err)
    }
}

const SENDER_EMAIL = 'photokub@mail.ru'
const RECIPIENT_EMAIL = "photokub@yandex.ru"

transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
        user: SENDER_EMAIL,
        pass: 'MPdHrmbuJspXvTwAEC1T',
    },
});

const sendMessage = async (req, res, next) => {
    try {
        const message = await ({
            from: SENDER_EMAIL,
            to: RECIPIENT_EMAIL,
            subject: `Сообщение формы ОС | Отправитель: ${req.body.name} | ${req.body.email}`,
            text: `${req.body.message}`
        });
        return res.status(200).send(transporter.sendMail(message))
    } catch (err) {
        next(err)
    }
}

const sendCallBackMessage = async (req, res, next) => {
    try {
        const message = await ({
            from: SENDER_EMAIL,
            to: RECIPIENT_EMAIL,
            subject: `Обратный звонок для ${req.body.name}.`,
            text: `Контактное лицо: ${req.body.name}. Контактный телефон: ${req.body.phone}`
        });
        return res.status(200).send(transporter.sendMail(message))
    } catch (err) {
        next(err)
    }
}

module.exports = {
    sendCallBackMessage,
    sendMessage,
}