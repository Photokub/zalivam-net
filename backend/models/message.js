const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const nodemailer = require("nodemailer");

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('message', messageSchema)