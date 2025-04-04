import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">DevCraft</span>
              <span className="text-primary">Solutions</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Crafting exceptional mobile experiences that solve real-world problems and drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iOS App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Android App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cross-Platform Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Backend Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">App Maintenance & Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="ml-2 text-gray-400">123 Tech Park, Suite 456<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="ml-2 text-gray-400">info@devcraftsolutions.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="ml-2 text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="ml-2 text-gray-400">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 2:00 PM<br />
                  Sun: Closed
                </span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 text-sm text-gray-900 bg-white border-0 rounded-l-lg focus:outline-none" 
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-r-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DevCraft Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
