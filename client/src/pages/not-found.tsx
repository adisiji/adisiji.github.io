import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full text-center"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 relative mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
            className="mx-auto"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
              d="M60 40H180C190 40 200 50 200 60V180C200 190 190 200 180 200H60C50 200 40 190 40 180V60C40 50 50 40 60 40Z"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              x="120"
              y="140"
              fontFamily="Arial"
              fontSize="60"
              fontWeight="bold"
              textAnchor="middle"
              fill="currentColor"
            >
              404
            </motion.text>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
              d="M85 70L155 70"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2.2, duration: 1, ease: "easeInOut" }}
              d="M85 90L135 90"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
        >
          We couldn't find the page you're looking for. It might have been moved, deleted, or never existed in the first place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="/">
            <Button 
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 shadow-md"
              size="lg"
            >
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
