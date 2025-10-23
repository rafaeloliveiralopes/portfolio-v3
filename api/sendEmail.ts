import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// Interface for request body validation
interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

// Validation helper
function validateFormData(data: unknown): data is ContactFormData {
  if (!data || typeof data !== "object") return false;

  const typedData = data as Record<string, unknown>;
  const { fullName, phone, email, subject, message } = typedData;

  // Check required fields
  if (!fullName || !email || !message) return false;

  // Type checks
  if (
    typeof fullName !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return false;
  }

  // Optional fields type checks
  if (phone && typeof phone !== "string") return false;
  if (subject && typeof subject !== "string") return false;

  // Length validations
  if (fullName.length > 100) return false;
  if (email.length > 100) return false;
  if (phone && (phone as string).length > 30) return false;
  if (subject && (subject as string).length > 200) return false;
  if (message.length > 5000) return false;

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST method
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed. Use POST." });
  }

  try {
    // Validate request body
    if (!validateFormData(req.body)) {
      return res.status(400).json({
        message: "Invalid form data. Please check all required fields.",
      });
    }

    const { fullName, phone, email, subject, message } =
      req.body as ContactFormData;

    // Check environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailUser || !gmailPass) {
      console.error("Missing GMAIL_USER or GMAIL_PASS environment variables");
      return res.status(500).json({
        message: "Email service configuration error.",
      });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Compose email text
    const emailText = `
New contact form submission:

Name: ${fullName}
Phone: ${phone || "Not provided"}
Email: ${email}
Subject: ${subject || "No subject"}

Message:
${message}
    `.trim();

    // Send email
    await transporter.sendMail({
      from: gmailUser,
      to: gmailUser,
      replyTo: email,
      subject: subject || `New contact from ${fullName}`,
      text: emailText,
    });

    return res.status(200).json({
      message: "Email enviado com sucesso!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      message: "Failed to send email. Please try again later.",
    });
  }
}
