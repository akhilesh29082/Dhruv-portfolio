import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { sendEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      
      // Save the contact message to storage
      await storage.createContactMessage(contactData);
      
      // Send email notification (this is a mock implementation)
      await sendEmail({
        to: "bompilwardhruv@gmail.com",
        subject: `New Contact Form: ${contactData.subject}`,
        body: `
          Name: ${contactData.name}
          Email: ${contactData.email}
          Subject: ${contactData.subject}
          Message: ${contactData.message}
        `
      });
      
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
