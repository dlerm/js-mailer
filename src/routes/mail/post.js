import nodemailer from 'nodemailer';
import { config as dotenv } from 'dotenv';

module.exports = async (ctx, next) => {
  // console.log('BODY:', ctx.request.body);

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: testAccount.user, // generated ethereal user
  //     pass: testAccount.pass // generated ethereal password
  //   }
  // });

  dotenv();
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  let transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: SMTP_USER, 
      pass: SMTP_PASS
    }
  });

  const { 
    from = [],
    to = [],
    cc = [],
    bcc = [],
    subject = 'Subject',
    fields
  } = ctx.request.body;

  const email = {
    from: from.join(', '),
    to: to.join(', '),
    cc: cc.join(', '),
    bcc: bdd.join(', '),
    subject
  };

  const html = `<b>Hello world?</b>`;
  const text = `Hello world?`;

  email.html = html;
  email.text = text;

  let info = await transporter.sendMail(email);

  // console.log(`Message sent: ${info.messageId}`);
  // const preview = nodemailer.getTestMessageUrl(info);
  // console.log(`Preview URL: ${preview}`);
  
  return ctx.body = { 
    status: {
      code: 200,
      state: 'success'
    },
    data: {
      info
    }
  };
};