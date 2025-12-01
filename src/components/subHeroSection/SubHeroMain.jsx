import { motion } from "framer-motion";

const SubHeroMain = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 dark:from-primary/30 dark:via-secondary/30 dark:to-accent/30"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full border-y border-primary/30 text-white dark:text-white flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-12 md:flex-row sm:flex-col items-center gap-6 transition-colors duration-300 font-bold backdrop-blur-sm">
        <motion.p 
          className="md:block sm:hidden hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Fast Learner
        </motion.p>
        <motion.p 
          className="md:block sm:hidden hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Team Work
        </motion.p>
        <motion.p 
          className="hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Details Master
        </motion.p>
      </div>
    </div>
  );
};

export default SubHeroMain;
