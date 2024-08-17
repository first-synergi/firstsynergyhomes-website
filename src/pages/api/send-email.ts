// pages/api/send-email.js
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req: any, res: any) {
//   if (req.method === "POST") {
//     const { email, firstName, lastName, phone, subject, message } = req.body;

//     // Create a transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: process.env.NEXT_PUBLIC_EMAIL_HOST,
//       port: process.env.NEXT_PUBLIC_EMAIL_PORT,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.NEXT_PUBLIC_EMAIL_USER,
//         pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
//       },
//     });

//     try {
//       // Send mail with defined transport object
//       let info = await transporter.sendMail({
//         from: `Dev <${process.env.NEXT_PUBLIC_EMAIL_USER}>`, // sender address
//         to: "jmzoran01@gmail.com", // list of receivers
//         subject: subject, // Subject line
//         text: message, // plain text body
//       });

//       console.log("Message sent: %s", info.messageId);
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Error sending email", error });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { to, subject, text, html } = req.body;

    const msg = {
      to, // recipient email
      from: "sender@example.com", // your verified sender email
      subject,
      text,
      html,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
