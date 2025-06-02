import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";
import {
  contactMessageSchema,
  ContactMessageFormValues,
} from "@/lib/validations/contact-message-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log("Received POST request to /api/contact-message");

    // Log request body
    const body = await request.json();
    console.log("Request body:", body);

    // Validate data
    console.log("Parsing request body with Zod schema");
    const data = contactMessageSchema.parse(body) as ContactMessageFormValues;
    console.log("Parsed data:", data);

    // Log Resend configuration
    console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "Set" : "Missing");
    console.log("Sending email via Resend with config:", {
      from: "Contact Form <onboarding@resend.dev>",
      to: "njsarl93@gmail.com",
      subject: `Nouveau message de contact: ${data.subject}`,
    });

    // Send email
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Replace with your verified domain
      to: "njsarl93@gmail.com", // Replace with your email
      subject: `Nouveau message de contact: ${data.subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Prénom:</strong> ${data.first_name}</p>
        <p><strong>Nom:</strong> ${data.last_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Sujet:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Resend email response:", emailResponse);

    return NextResponse.json({ success: true, emailResponse }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error in /api/contact-message:", error);
    if (error instanceof z.ZodError) {
      console.log("Zod validation errors:", error.errors);
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 400 }
      );
    }
    // Affiner le type de error
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message", details: errorMessage },
      { status: 500 }
    );
  }
}