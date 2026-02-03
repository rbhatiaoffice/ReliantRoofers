import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10),
  preferredContactMethod: z.enum(['email', 'phone', 'either']).optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Check for API key before initializing Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@reliantroofers.co.uk';
    const fromEmail = process.env.FROM_EMAIL || 'noreply@reliantroofers.co.uk';

    // Format the email content
    const emailContent = `
New Contact Form Submission

Name: ${validatedData.fullName}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
${validatedData.serviceInterest ? `Service Interest: ${validatedData.serviceInterest}` : ''}
${validatedData.preferredContactMethod ? `Preferred Contact Method: ${validatedData.preferredContactMethod}` : ''}

Message:
${validatedData.message}

---
Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
    `.trim();

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Contact Form Submission from ${validatedData.fullName}`,
      text: emailContent,
      replyTo: validatedData.email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Optionally send confirmation email to user
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      await resend.emails.send({
        from: fromEmail,
        to: validatedData.email,
        subject: 'Thank you for contacting Reliant Roofers',
        text: `
Dear ${validatedData.fullName},

Thank you for contacting Reliant Roofers. We have received your enquiry and will get back to you as soon as possible.

Your Message:
${validatedData.message}

If you have any urgent questions, please don't hesitate to call us on 01234 567 890.

Best regards,
The Reliant Roofers Team
        `.trim(),
      });
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

