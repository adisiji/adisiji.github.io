import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertProjectInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // API route for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request data against our schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Contact form submitted successfully",
        id: submission.id
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  // Get all contact submissions (for demonstration purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  });
  
  // API route for project inquiry submissions
  app.post("/api/project-inquiry", async (req, res) => {
    try {
      // Validate request data against our schema
      const validatedData = insertProjectInquirySchema.parse(req.body);
      
      // Store the project inquiry
      const inquiry = await storage.createProjectInquiry(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Project inquiry submitted successfully",
        id: inquiry.id
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });
  
  // Get all project inquiries (for demonstration purposes)
  app.get("/api/project-inquiry", async (req, res) => {
    try {
      const inquiries = await storage.getAllProjectInquiries();
      res.status(200).json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  });
  
  // Get a specific project inquiry by ID
  app.get("/api/project-inquiry/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
      
      const inquiry = await storage.getProjectInquiry(id);
      if (!inquiry) {
        return res.status(404).json({ message: "Project inquiry not found" });
      }
      
      res.status(200).json(inquiry);
    } catch (error) {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
