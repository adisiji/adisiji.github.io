import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
});

// New table for detailed project inquiries
export const projectInquiries = pgTable("project_inquiries", {
  id: serial("id").primaryKey(),
  // Company/Personal Info
  name: text("name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  phone: text("phone"),
  
  // Project Details
  projectTitle: text("project_title").notNull(),
  projectType: text("project_type").notNull(),
  targetPlatforms: text("target_platforms").notNull(),
  targetAudience: text("target_audience"),
  
  // Requirements
  projectDescription: text("project_description").notNull(),
  keyFeatures: text("key_features").notNull(),
  designRequirements: text("design_requirements"),
  
  // Timeline & Budget
  timeline: text("timeline").notNull(),
  budgetRange: text("budget_range").notNull(),
  
  // Additional Information
  additionalInfo: text("additional_info"),
  
  // Created timestamp
  createdAt: text("created_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  phone: true,
  subject: true,
  message: true,
}).extend({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

// Schema for project inquiry form
export const insertProjectInquirySchema = createInsertSchema(projectInquiries).pick({
  // Company/Personal Info
  name: true,
  company: true,
  email: true,
  phone: true,
  
  // Project Details
  projectTitle: true,
  projectType: true,
  targetPlatforms: true,
  targetAudience: true,
  
  // Requirements
  projectDescription: true,
  keyFeatures: true,
  designRequirements: true,
  
  // Timeline & Budget
  timeline: true,
  budgetRange: true,
  
  // Additional Information
  additionalInfo: true,
}).extend({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  projectTitle: z.string().min(3, { message: "Project title must be at least 3 characters" }),
  projectType: z.string().min(2, { message: "Please select a project type" }),
  targetPlatforms: z.string().min(2, { message: "Please select at least one target platform" }),
  projectDescription: z.string().min(30, { message: "Please provide a detailed project description (at least 30 characters)" }),
  keyFeatures: z.string().min(10, { message: "Please list key features of your project" }),
  timeline: z.string().min(2, { message: "Please provide your project timeline" }),
  budgetRange: z.string().min(2, { message: "Please select a budget range" }),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertProjectInquiry = z.infer<typeof insertProjectInquirySchema>;
export type ProjectInquiry = typeof projectInquiries.$inferSelect;
