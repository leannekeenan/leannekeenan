const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
        user: 'l_keenan@outlook.com',
        pass: 'L!m@M!k3K!10'
    }
});

async function sendEmail(recipient, subject, htmlContent) {
    try {
        const info = await transporter.sendMail({
            from: '"Your Name" <l_keenan@outlook.com>',
            to: recipient,
            subject: subject,
            html: htmlContent
        });

        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

module.exports = { sendEmail };
