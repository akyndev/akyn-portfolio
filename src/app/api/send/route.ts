import { EmailTemplate } from "@/components/email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message)
    return Response.json(
      { error: "You need to provide a name" },
      { status: 400 },
    );
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["akinladeirede@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name, email, message }),
      text: "",
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
