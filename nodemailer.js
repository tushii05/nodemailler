const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: user.email,
            subject: "Withdrawal Successful",
            html: `Hii, ${user.fname} <br>
            Your Withdraw of amount is ₹ <b> ${params.amount}</b> INR was Successful, See your transactions <a href="http://159.223.51.198:3001/withdrawal-history" >Here</a>. <br>
            <a href="http://159.223.51.198:3001/withdrawal" >Click Here</a> to add more amount into your wallet.
            <br>
            <br>
            The team Lifetime lotto.`
        };

        await transporter.sendMail(mailOptions);
        
        
        --------------------------------------------------------------
        
        const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});
async function sendEmail(to, subject, html) {
    const mailOptions = {
        from: process.env.SMTP_USER,
        to,
        subject,
        html,
    };
    await transporter.sendMail(mailOptions);
}
module.exports = { sendEmail };

---------------------

const { sendEmail } = require('../../_middleware/email');

const html = `Hii, ${user.fname} <br>
        Your Winning of amount is ₹ <b> ${params.amount}</b> INR was Successful, See your transactions <a href="http://159.223.51.198:3001/withdrawal" >Here</a>. <br>
        <a href="http://159.223.51.198:3001/login" >Click Here</a> to add more amount into your wallet.
        <br>
        <br>
        The team Lifetime lotto.`;
        const subject = "Winning Amount  Successful";
        await sendEmail(user.email, subject, html);
