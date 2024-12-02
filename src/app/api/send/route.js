import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const  {email, userFistname} = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you',
      html : render(EmailTemplate({userFistname, }))
    //   react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data, {message: "email sent successfully"});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
