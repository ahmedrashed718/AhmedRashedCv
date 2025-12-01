import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey dark:text-lightGrey transition-colors duration-300"
      >
        Front-End Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold uppercase bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary bg-clip-text text-transparent"
      >
        Ahmed Rashed
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Mobile App Developer with React Native <br />
        And frontend developer with React Js
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex gap-4 mt-6 md:justify-start sm:justify-center"
      >
        <motion.a
          href="https://github.com/ahmedrashed718"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
        >
          <div className="text-2xl h-14 w-14 border-2 border-primary dark:border-primary text-primary dark:text-primary rounded-full p-3 flex items-center justify-center transition-all duration-300 hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-primary/50">
            <FiGithub />
          </div>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ahmed-elsiad-rashed?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
        >
          <div className="text-2xl h-14 w-14 border-2 border-primary dark:border-primary text-primary dark:text-primary rounded-full p-3 flex items-center justify-center transition-all duration-300 hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-primary/50">
            <FaLinkedinIn />
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HeroText;
