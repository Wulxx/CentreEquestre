import nodeMailer from 'nodemailer';
export const sendMail = (mail, name, password, lost) => {
    var transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth : {
            user : 'bibou882@gmail.com',
            pass : '29121997'
        }
    });

    let lostText = 'Votre mot de passe est : ' + password
    let creationtext = 'Bienvenu ' + name;

    let lostSub = "["+name+"]"+" Reccupération de votre mot de passe"
    let creationSub = "["+name+"]"+" Les information relatives à votre compte"

    let text, subj;
    if (lost){
        text = lostText;
        subj = lostSub;
    }else {
        text = creationtext
        subj = creationSub;
    }

    var mailOptions = {
        from : 'lxbillboard1@gmail.com',
        to : mail,
        subject : subj,
        text : text,
    };

    console.log(mailOptions)
    transporter.sendMail(mailOptions, (err, inf) => {
        if (err){
            console.log(err)
        }else{
            console.log("well sent " + inf.response)
        }
    })
}


