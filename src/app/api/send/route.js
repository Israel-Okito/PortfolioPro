
// import { EmailTemplate } from '@/components/email-template';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function GET(req) {
//     // const  {email, userFistname} = await req.json()
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <okitoPortfolio@okitdev.com>',
//       to: 'israelokito88@gmail.com',
//       subject: 'Thank you',
//     //   html : render(EmailTemplate({userFistname}))
//       react: EmailTemplate({ firstName: 'John' }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return NextResponse.json({'hello':'world'});
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
