// This is a mock email service that logs emails instead of sending them
// In a production environment, you would use a real email service like Nodemailer

interface EmailOptions {
  to: string;
  subject: string;
  body: string;
  from?: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  const { to, subject, body, from = "noreply@portfolio.com" } = options;
  
  console.log('=============== EMAIL SENT ===============');
  console.log(`From: ${from}`);
  console.log(`To: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);
  console.log('==========================================');
  
  // In a real implementation, you would use a service like Nodemailer:
  // const transporter = nodemailer.createTransport({...})
  // await transporter.sendMail({...})
  
  return true;
}
