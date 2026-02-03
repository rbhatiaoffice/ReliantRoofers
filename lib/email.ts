// Email utility functions
// This file can be extended with additional email functionality

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceInterest?: string;
  message: string;
  preferredContactMethod?: 'email' | 'phone' | 'either';
}

export function formatContactEmail(data: ContactFormData): string {
  return `
New Contact Form Submission

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
${data.serviceInterest ? `Service Interest: ${data.serviceInterest}` : ''}
${data.preferredContactMethod ? `Preferred Contact Method: ${data.preferredContactMethod}` : ''}

Message:
${data.message}

---
Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
  `.trim();
}

