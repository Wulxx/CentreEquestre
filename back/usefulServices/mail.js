import nodeMailer from 'nodemailer';


export const sendMail = (mail, name, password) => {
    var transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth : {
            user : 'bibou882@gmail.com',
            pass : '29121997'
        }
    });
    
    var mailOptions = {
        from : 'lxbillboard1@gmail.com',
        to : mail,
        subject : 'bonjour ' + name,
        text : 'Votre mot de passe est : ' + password,
    };

    transporter.sendMail(mailOptions, (err, inf) => {
        if (err){
            console.log(err)
        }else{
            console.log("well sent " + inf.response)
        }
    })
}


