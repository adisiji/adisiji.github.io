import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clientLogos } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const ClientsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Set up auto-scroll function
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const startAutoScroll = () => {
      // Scroll every 3 seconds
      interval = setInterval(() => {
        const nextButton = carouselRef.current?.querySelector('[data-carousel-next]') as HTMLButtonElement | null;
        if (nextButton) {
          nextButton.click();
        }
      }, 3000);
    };
    
    startAutoScroll();
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-16"
    >
      <motion.p 
        variants={titleVariants}
        className="text-center text-gray-500 mb-8 font-medium"
      >
        Trusted by innovative companies worldwide
      </motion.p>
      
      <motion.div 
        ref={carouselRef} 
        className="relative mx-auto max-w-5xl"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5 }
          }
        }}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {clientLogos.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <motion.div 
                  className="h-20 flex flex-col items-center justify-center p-2 mx-2 rounded-md border border-gray-100 shadow-sm hover:shadow-lg bg-white"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.1
                    }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <logo.icon className={logo.className} />
                  </motion.div>
                  <motion.span 
                    className="text-xs text-gray-500 mt-1 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3 + index * 0.05 } }}
                  >
                    {logo.name}
                  </motion.span>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious 
            data-carousel-prev
            className="absolute left-0 -translate-x-1/2 opacity-70 hover:opacity-100 transition-opacity"
          />
          <CarouselNext 
            data-carousel-next
            className="absolute right-0 translate-x-1/2 opacity-70 hover:opacity-100 transition-opacity"
          />
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default ClientsSection;
