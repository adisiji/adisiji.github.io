// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  contactSubmissions;
  projectInquiries;
  userCurrentId;
  contactCurrentId;
  projectInquiryCurrentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contactSubmissions = /* @__PURE__ */ new Map();
    this.projectInquiries = /* @__PURE__ */ new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.projectInquiryCurrentId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userCurrentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createContactSubmission(submission) {
    const id = this.contactCurrentId++;
    const createdAt = (/* @__PURE__ */ new Date()).toISOString();
    const contactSubmission = {
      id,
      name: submission.name,
      email: submission.email,
      subject: submission.subject,
      message: submission.message,
      phone: submission.phone || null,
      createdAt
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  async getAllContactSubmissions() {
    return Array.from(this.contactSubmissions.values());
  }
  async createProjectInquiry(inquiry) {
    const id = this.projectInquiryCurrentId++;
    const createdAt = (/* @__PURE__ */ new Date()).toISOString();
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
    };
    this.projectInquiries.set(id, projectInquiry);
    return projectInquiry;
  }
  async getAllProjectInquiries() {
    return Array.from(this.projectInquiries.values());
  }
  async getProjectInquiry(id) {
    return this.projectInquiries.get(id);
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull()
});
var projectInquiries = pgTable("project_inquiries", {
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
  createdAt: text("created_at").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  phone: true,
  subject: true,
  message: true
}).extend({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});
var insertProjectInquirySchema = createInsertSchema(projectInquiries).pick({
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
  additionalInfo: true
}).extend({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  projectTitle: z.string().min(3, { message: "Project title must be at least 3 characters" }),
  projectType: z.string().min(2, { message: "Please select a project type" }),
  targetPlatforms: z.string().min(2, { message: "Please select at least one target platform" }),
  projectDescription: z.string().min(30, { message: "Please provide a detailed project description (at least 30 characters)" }),
  keyFeatures: z.string().min(10, { message: "Please list key features of your project" }),
  timeline: z.string().min(2, { message: "Please provide your project timeline" }),
  budgetRange: z.string().min(2, { message: "Please select a budget range" })
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
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
  app2.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  });
  app2.post("/api/project-inquiry", async (req, res) => {
    try {
      const validatedData = insertProjectInquirySchema.parse(req.body);
      const inquiry = await storage.createProjectInquiry(validatedData);
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
  app2.get("/api/project-inquiry", async (req, res) => {
    try {
      const inquiries = await storage.getAllProjectInquiries();
      res.status(200).json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  });
  app2.get("/api/project-inquiry/:id", async (req, res) => {
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
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
