import { config as dotenv } from 'dotenv';
dotenv();

const generateNodemailerConfig = () => {
  const { SMTP_HOST: host, SMTP_PORT: port, SMTP_USER: user, SMTP_PASS: pass } = process.env;
  return {
    host,
    port,
    secure: true,
    auth: {
      user,
      pass,
    },
  }
};

const isEmptyObject = (obj) => {
  return Object.keys(obj).length < 1;
};

const generateMailBody = (fields) => {
  console.log('fields', fields)
  if (isEmptyObject(fields)) return '';
  return Object.keys(fields).map((key) => {
    return `
      <table class="field" style="width: 100%;">
        <tr class="field__row">
          <td class="field__label"  style="width: 100%; padding: 10px 0; font-weight: bold; text-transform: capitalize; border-bottom: 2px solid #eee;">${ key }:</td>
        </tr>
        <tr class="field__row">
          <td class="field__value" style="width: 100%; padding: 10px 0 20px;">${ fields[key] }</td>
        </tr>
      </table>
    `;
  }).join('');  
};

const generateMailLayout = (email) => {
  const body = generateMailBody(email.fields);
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${ email.subject }</title>
  </head>
  <body style="background-color: #f9f9f9;" bgcolor="#f9f9f9">
    <table class="window" style="width: 100%; background: linear-gradient(#55f 200px, #f9f9f9 200px, #f9f9f9); padding: 100px 0;" bgcolor="#f9f9f9">
      <tr>
        <td style="padding: 4px;">
          <table class="frame" style="width: 600px; background-color: #ffffff; margin: 0 auto; border-radius: 10px; box-shadow: 0 0 2px rgba(0,0,0,0.2); padding: 10px 40px; border: 1px solid #eee;">
            <tr>
              <td style="padding: 40px 0; font-weight: bold;">Message from: ${ email.from }</td>
            </tr>
            <tr>
              <td>${ body }</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};

module.exports = {
  generateNodemailerConfig,
  isEmptyObject,
  generateMailBody,
  generateMailLayout,
};