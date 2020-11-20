"use strict";
import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // 下面测试邮箱账号仅用于测试，若是有自己的邮箱可以不用
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "email", // generated ethereal user
      pass: "code", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"name" <sender email>', // sender address
    to: "receiver email", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `
    <a href="http://localhost:8080/#/forget" style="color: #333333">重置密码</a>
`, // html body
  });

  return("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);
export {main}