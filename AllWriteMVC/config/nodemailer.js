    import nodemailer from "nodemailer";

    export default nodemailer.createTransport({        
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'projeto.allwrite@gmail.com',
            pass: 'AllWrite2021'
    }
});