import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../state/themeSlice";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-14 h-8 rounded-full p-1 transition-all duration-300 flex items-center cursor-pointer border-2 ${
        theme === "dark" 
          ? "bg-primary border-primary shadow-lg shadow-primary/50" 
          : "bg-gray-200 border-gray-300 shadow-md"
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className={`absolute w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          theme === "dark" 
            ? "bg-white translate-x-6" 
            : "bg-white translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <BsMoonFill className="text-primary text-xs" />
        ) : (
          <BsSunFill className="text-orange text-xs" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

