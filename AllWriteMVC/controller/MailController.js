const SendMailService = require('../service/sendMailService');

const MailController = {
    contact_support: (req, res) => {
        return res.render("contact_support");
    },
    sendMail: (req, res) => {
        const { name, email, message } = req.body;

        let mailData = {
            topic: 'Nova mensagem recebida do site',
            recipient: process.env.EMAIL,
            body: 'Nova mensagem recebida de: ' + name + ' <' + email + '>' + '\n' + message
        }

        SendMailService.sendMail(mailData);
        return res.render('success');
    }
}

module.exports = MailController;