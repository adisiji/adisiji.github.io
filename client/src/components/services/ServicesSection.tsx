import { Smartphone, Monitor, Code, Lightbulb, Server, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "iOS App Development",
    description: "We create intuitive and high-performance native applications for iPhone and iPad using Swift and SwiftUI.",
    icon: Smartphone,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    frontBg: "bg-gradient-to-br from-primary/5 to-primary/20",
    backBg: "bg-gradient-to-br from-primary/20 to-primary/10",
  },
  {
    title: "Android App Development",
    description: "We build robust and feature-rich Android applications using Kotlin and Jetpack Compose.",
    icon: Monitor,
    iconColor: "text-secondary",
    bgColor: "bg-secondary/10",
    frontBg: "bg-gradient-to-br from-secondary/5 to-secondary/20",
    backBg: "bg-gradient-to-br from-secondary/20 to-secondary/10",
  },
  {
    title: "Cross-Platform Development",
    description: "We develop cost-effective applications for multiple platforms using React Native and Flutter.",
    icon: Code,
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
    frontBg: "bg-gradient-to-br from-accent/5 to-accent/20",
    backBg: "bg-gradient-to-br from-accent/20 to-accent/10",
  },
  {
    title: "UI/UX Design",
    description: "We design beautiful, intuitive interfaces that deliver exceptional user experiences and drive engagement.",
    icon: Lightbulb,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    frontBg: "bg-gradient-to-br from-primary/5 to-primary/20",
    backBg: "bg-gradient-to-br from-primary/20 to-primary/10",
  },
  {
    title: "Backend Development",
    description: "We create scalable APIs and server-side infrastructure to power your mobile applications.",
    icon: Server,
    iconColor: "text-secondary",
    bgColor: "bg-secondary/10",
    frontBg: "bg-gradient-to-br from-secondary/5 to-secondary/20",
    backBg: "bg-gradient-to-br from-secondary/20 to-secondary/10",
  },
  {
    title: "App Maintenance & Support",
    description: "We provide ongoing maintenance, updates, and support to keep your applications running smoothly.",
    icon: Shield,
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
    frontBg: "bg-gradient-to-br from-accent/5 to-accent/20",
    backBg: "bg-gradient-to-br from-accent/20 to-accent/10",
  },
];

// Service card with flip animation
const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="perspective-1000 relative h-[280px] w-full cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5, 
          delay: index * 0.1 
        } 
      }}
      viewport={{ once: true, amount: 0.3 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="flip-card-inner w-full h-full transition-all duration-500"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front side */}
        <motion.div
          className={`flip-card-front absolute w-full h-full ${service.frontBg} p-8 rounded-xl shadow-md flex flex-col items-center justify-center backface-hidden`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.div 
            className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <service.icon className={`h-8 w-8 ${service.iconColor}`} />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
          <p className="text-center text-gray-600 text-sm">Click to learn more</p>
        </motion.div>

        {/* Back side */}
        <motion.div
          className={`flip-card-back absolute w-full h-full ${service.backBg} p-8 rounded-xl shadow-md flex flex-col items-center justify-center backface-hidden`}
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
          <p className="text-gray-700 text-center">{service.description}</p>
          <motion.button 
            className={`mt-4 px-4 py-2 text-white ${
              service.iconColor.includes('primary') ? 'bg-primary' :
              service.iconColor.includes('secondary') ? 'bg-secondary' : 'bg-accent'
            } rounded-md text-sm`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We provide end-to-end mobile application development services tailored to your business needs.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
