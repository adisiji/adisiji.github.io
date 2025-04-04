import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";

// This is a simple way to communicate between components without 
// needing Redux or context API - using the window object
declare global {
  interface Window {
    scrollToSection?: string;
  }
}

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "About", href: "#about" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/" || location === "";

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Handle scrolling to section after navigation
  useEffect(() => {
    if (isHomePage && window.scrollToSection) {
      const targetId = window.scrollToSection;
      window.scrollToSection = undefined; // Clear it once used
      
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 64,
            behavior: "smooth",
          });
        } else {
          console.log(`Element with id ${targetId} not found after navigation`);
        }
      }, 300);
    }
  }, [isHomePage, location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [, navigate] = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    
    // If we're not on the home page and the link is a section link, navigate to home first
    if (!isHomePage && href && href.startsWith("#")) {
      e.preventDefault();
      // Store the section ID to scroll to after navigation
      window.scrollToSection = href;
      navigate("/");
      
      // Close mobile menu if open
      setMobileMenuOpen(false);
      return;
    }
    
    // Regular section navigation for home page
    if (isHomePage && href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 64,
          behavior: "smooth",
        });
        
        // Close mobile menu if open
        setMobileMenuOpen(false);
      }
    }
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const logoVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      height: 0
    },
    visible: { 
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header 
      className={`fixed w-full backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 dark:bg-background/95 shadow-md" : "bg-background/80 dark:bg-background/80"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <Link href="/" className="text-2xl font-bold">
              <motion.span 
                className="text-primary"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
              >
                DevCraft
              </motion.span>
              <motion.span 
                className="text-accent"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
              >
                Solutions
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-sm font-medium hover:text-primary/80 dark:hover:text-primary transition-colors relative"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                    whileHover={{ 
                      width: "100%",
                      transition: { duration: 0.3 }
                    }}
                  ></motion.span>
                </motion.a>
              ))}
            </nav>
            
            <motion.div
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              custom={navItems.length}
            >
              <ThemeToggle />
            </motion.div>
            
            <motion.div
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              custom={navItems.length + 1}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/project-inquiry" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button 
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 shadow-md"
                  size="sm"
                >
                  Get Quote
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button 
              onClick={toggleMobileMenu} 
              className="text-dark focus:outline-none p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary/80 dark:hover:text-primary transition-colors"
                    variants={mobileNavItemVariants}
                    custom={index}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <motion.div 
                  variants={mobileNavItemVariants}
                  custom={navItems.length}
                  className="mt-4 px-3 flex items-center justify-between"
                >
                  <div className="flex-grow">
                    <Link href="/project-inquiry" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 shadow-md"
                      >
                        Get Project Quote
                      </Button>
                    </Link>
                  </div>
                  <div className="ml-4">
                    <ThemeToggle />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
