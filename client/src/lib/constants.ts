import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { SiAmazon, SiGoogle, SiSamsung, SiAdobe, SiNetflix, SiSpotify, SiUber, SiAirbnb, SiApple, SiIntel } from "react-icons/si";

export const clientLogos = [
  { 
    name: "Apple", 
    icon: SiApple, 
    className: "text-gray-800 text-3xl"
  },
  { 
    name: "Amazon", 
    icon: SiAmazon, 
    className: "text-orange-500 text-3xl"
  },
  { 
    name: "Google", 
    icon: SiGoogle, 
    className: "text-green-500 text-3xl" 
  },
  { 
    name: "Samsung", 
    icon: SiSamsung, 
    className: "text-blue-800 text-3xl" 
  },
  { 
    name: "Intel", 
    icon: SiIntel, 
    className: "text-blue-700 text-3xl" 
  },
  { 
    name: "Adobe", 
    icon: SiAdobe, 
    className: "text-red-600 text-3xl" 
  },
  { 
    name: "Netflix", 
    icon: SiNetflix, 
    className: "text-red-600 text-3xl" 
  },
  { 
    name: "Spotify", 
    icon: SiSpotify, 
    className: "text-green-500 text-3xl" 
  },
  { 
    name: "Uber", 
    icon: SiUber, 
    className: "text-gray-800 text-3xl" 
  },
  { 
    name: "Airbnb", 
    icon: SiAirbnb, 
    className: "text-red-500 text-3xl" 
  }
];

export const projects = [
  {
    title: "FitTrack Pro",
    description: "A comprehensive fitness tracking application with personalized workout plans and nutrition guidance.",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "iOS", className: "bg-blue-100 text-blue-800" },
      { name: "Android", className: "bg-green-100 text-green-800" },
      { name: "React Native", className: "bg-purple-100 text-purple-800" },
    ]
  },
  {
    title: "ShopEase",
    description: "A feature-rich e-commerce platform with personalized recommendations and secure payment processing.",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "iOS", className: "bg-blue-100 text-blue-800" },
      { name: "Android", className: "bg-green-100 text-green-800" },
      { name: "Flutter", className: "bg-yellow-100 text-yellow-800" },
    ]
  },
  {
    title: "FinanceFlow",
    description: "A secure personal finance management app with budgeting tools and investment tracking features.",
    imageUrl: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "iOS", className: "bg-blue-100 text-blue-800" },
      { name: "Swift", className: "bg-indigo-100 text-indigo-800" },
      { name: "Firebase", className: "bg-red-100 text-red-800" },
    ]
  },
  {
    title: "MealDash",
    description: "A food delivery platform with real-time order tracking and a seamless checkout experience.",
    imageUrl: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "Android", className: "bg-green-100 text-green-800" },
      { name: "Kotlin", className: "bg-teal-100 text-teal-800" },
      { name: "Google Maps API", className: "bg-orange-100 text-orange-800" },
    ]
  },
  {
    title: "TravelBuddy",
    description: "A comprehensive travel companion app with itinerary planning, booking features, and local recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1494368308039-ed3393eefd71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "iOS", className: "bg-blue-100 text-blue-800" },
      { name: "Android", className: "bg-green-100 text-green-800" },
      { name: "React Native", className: "bg-purple-100 text-purple-800" },
    ]
  },
  {
    title: "MediCare Connect",
    description: "A telemedicine app connecting patients with healthcare providers for virtual consultations and appointment scheduling.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "iOS", className: "bg-blue-100 text-blue-800" },
      { name: "Android", className: "bg-green-100 text-green-800" },
      { name: "Flutter", className: "bg-yellow-100 text-yellow-800" },
    ]
  }
];

export const teamMembers = [
  {
    name: "Michael Johnson",
    position: "CEO & Founder",
    bio: "10+ years of experience in mobile app development and software architecture.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    socialLinks: [
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "GitHub", icon: Github, url: "#" },
      { name: "Twitter", icon: Twitter, url: "#" },
    ]
  },
  {
    name: "Sarah Chen",
    position: "Lead iOS Developer",
    bio: "Expert in Swift and iOS architecture with a passion for creating seamless user experiences.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    socialLinks: [
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "GitHub", icon: Github, url: "#" },
      { name: "Twitter", icon: Twitter, url: "#" },
    ]
  },
  {
    name: "David Rodriguez",
    position: "Lead Android Developer",
    bio: "Kotlin specialist with extensive experience in developing scalable Android applications.",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    socialLinks: [
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "GitHub", icon: Github, url: "#" },
      { name: "Twitter", icon: Twitter, url: "#" },
    ]
  },
  {
    name: "Emily Taylor",
    position: "UI/UX Designer",
    bio: "Award-winning designer who creates intuitive and visually stunning interfaces for mobile apps.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    socialLinks: [
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "GitHub", icon: Github, url: "#" },
      { name: "Twitter", icon: Twitter, url: "#" },
    ]
  }
];

export const testimonials = [
  {
    quote: "DevCraft Solutions delivered an exceptional e-commerce app that exceeded our expectations. Their team was responsive, thorough, and incredibly knowledgeable. The app has significantly increased our sales and customer satisfaction.",
    name: "Robert Wilson",
    position: "CEO",
    company: "E-Shop Enterprises",
  },
  {
    quote: "Working with DevCraft Solutions was a game-changer for our healthcare startup. Their expertise in developing secure, HIPAA-compliant mobile applications helped us launch a successful telehealth platform that our users love.",
    name: "Jennifer Lee",
    position: "Founder",
    company: "HealthConnect",
  },
  {
    quote: "The team at DevCraft Solutions transformed our business with their innovative approach to mobile app development. Their attention to detail, technical proficiency, and strategic insights make them an invaluable partner.",
    name: "Mark Thompson",
    position: "Director",
    company: "InnovateTech",
  }
];
