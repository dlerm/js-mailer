import nodemailer from 'nodemailer';
import controller from './controller';

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
  const config = controller.generateNodemailerConfig();
  
  const transporter = nodemailer.createTransport(config);

  const { 
    from = false,
    to = false,
    cc = false,
    bcc = false,
    subject = 'Subject',
    fields = {},
  } = ctx.request.body;

  const email = {
    from,
    to,
    cc,
    bcc,
    subject,
    fields,
  };

  email.html = controller.generateMailLayout(email);
  email.text = email.html.replace(/<(?:.|\n)*?>/gm, '');

  const info = await transporter.sendMail(email);
  
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