import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { TransportOptions, SentMessageInfo } from 'nodemailer';

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    auth: {
      user: 'markbrvaldez@gmail.com',
      pass: 'kalilinux2',
    },
  } as TransportOptions);

  try {
    const info: SentMessageInfo = await transporter.sendMail({
      from: 'markbrvaldez@gmail.com',
      to: to as string,
      subject: subject as string,
      text: text as string,
    });

    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
}
