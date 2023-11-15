import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gustavo.uptmoor@gmail.com",
      subject: "olá mundo",
      html: "<p>Este é um e-mail teste, sendo enviado pelo serviço da resend!</p>",
    });
    return NextResponse.json({ message: "Email sent", data });
  } catch (error) {
    return NextResponse.json(error);
  }
}
