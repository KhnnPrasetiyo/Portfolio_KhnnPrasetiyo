var nodemailer = require('nodemailer');
const { spawnSync } = require('child_process');
const alert = require('alert');


const sendEmail = async (req, res) => {

    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var subject = req.body.subject;
    var message = req.body.message + `\n Myname: ${name} \n Myphone Number : ${phone}`;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'markhanprasetiyo@gmail.com',
            pass: 'khannkiki'
        }
    });

    var mailOptions = {
        from: 'admin@prasetiyo.com',
        to: email,
        subject: subject,
        text: message
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.end('Email gagal terkirim, silahkan kembali ke halaman utama!\n\n' + error)
        } else {
            res.end('Email berhasil terkirim, silahkan kembali ke halaman utama!')
        }
    });
}

const sendMailSubs = async (req, res) => {

    var email = req.body.email;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'markhanprasetiyo@gmail.com',
            pass: 'khannkiki'
        }
    });

    var mailOptions = {
        from: 'admin@prasetiyo.com',
        to: email,
        subject: `Ucapan Terikasih`,
        text: `Selamat Siang/Sore/Malam\n\n
        Saya admin@prasetiyo mengucapkan terimkasih banyak atas dukungan anda\n
        jika anda butuh layanan silahkan balas email ini.Selamat menjalankan aktivitas kembali`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.end('Email gagal terkirim, silahkan kembali ke halaman utama!\n\n' + error)
        } else {
            res.end('Email berhasil terkirim, silahkan kembali ke halaman utama!')
        }
    });
}

module.exports = { sendEmail, sendMailSubs }