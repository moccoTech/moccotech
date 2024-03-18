import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { render } from '@react-email/render';
import MyTemplate from '@/app/components/EmailTemplate';

export async function POST(request) {
  const { email, fullName, message, phoneNumber } = await request.json();

  const html = render(
    <MyTemplate
      email={email}
      fullName={fullName}
      message={message}
      phoneNumber={phoneNumber}
    />,
    {
      pretty: true,
    }
  );

  const transport = nodemailer.createTransport({
    pool: true,
    host: process.env.MOCCO_HOST_EMAIL,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MOCCO_ADMIN_EMAIL,
      pass: process.env.MOCCO_ADMIN_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: 'Mocco Tech',
      address: process.env.MOCCO_ADMIN_EMAIL,
    },
    to: 'info@moccotech.com',
    subject: `Message from ${fullName} (${email})`,
    html: html,
  };

  try {
    const mail = await transport.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
