import transporter from "../config/nodemailer.js";

export default  (req, res) => {
        
        let mailOptions = {
            from: req.body.email, 
            to: 'projeto.allwrite@gmail.com',
            subject: `Mensagem de ${req.body.email}: ${req.body.subject}`,
            text: req.body.message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.render('contact_support', {
                    
                });
            }else{
                return res.status(200).json({url: "https://localhost:3600/success"})
            }
        })
    }



