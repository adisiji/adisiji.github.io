import { 
  users, 
  type User, 
  type InsertUser, 
  contactSubmissions, 
  type ContactSubmission, 
  type InsertContact,
  projectInquiries,
  type ProjectInquiry,
  type InsertProjectInquiry
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  createProjectInquiry(inquiry: InsertProjectInquiry): Promise<ProjectInquiry>;
  getAllProjectInquiries(): Promise<ProjectInquiry[]>;
  getProjectInquiry(id: number): Promise<ProjectInquiry | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private projectInquiries: Map<number, ProjectInquiry>;
  private userCurrentId: number;
  private contactCurrentId: number;
  private projectInquiryCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.projectInquiries = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.projectInquiryCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContact): Promise<ContactSubmission> {
    const id = this.contactCurrentId++;
    const createdAt = new Date().toISOString();
    const contactSubmission = { 
      id,
      name: submission.name,
      email: submission.email,
      subject: submission.subject,
      message: submission.message,
      phone: submission.phone || null,
      createdAt
    } as ContactSubmission;
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
  
  async createProjectInquiry(inquiry: InsertProjectInquiry): Promise<ProjectInquiry> {
    const id = this.projectInquiryCurrentId++;
    const createdAt = new Date().toISOString();
    // First create object with all required non-null fields
    const projectInquiry = {
      id,
      name: inquiry.name,
      email: inquiry.email,
      projectTitle: inquiry.projectTitle,
      projectType: inquiry.projectType,
      targetPlatforms: inquiry.targetPlatforms,
      projectDescription: inquiry.projectDescription,
      keyFeatures: inquiry.keyFeatures,
      timeline: inquiry.timeline,
      budgetRange: inquiry.budgetRange,
      createdAt,
      // Add nullable fields with correct defaults
      phone: inquiry.phone || null,
      company: inquiry.company || null,
      targetAudience: inquiry.targetAudience || null,
      designRequirements: inquiry.designRequirements || null,
      additionalInfo: inquiry.additionalInfo || null
    } as ProjectInquiry;
    this.projectInquiries.set(id, projectInquiry);
    return projectInquiry;
  }
  
  async getAllProjectInquiries(): Promise<ProjectInquiry[]> {
    return Array.from(this.projectInquiries.values());
  }
  
  async getProjectInquiry(id: number): Promise<ProjectInquiry | undefined> {
    return this.projectInquiries.get(id);
  }
}

export const storage = new MemStorage();
