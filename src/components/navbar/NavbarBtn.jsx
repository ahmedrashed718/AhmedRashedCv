import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white dark:text-white border-primary dark:border-primary border flex items-center gap-1 bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary transition-all duration-500 hover:scale-110 hover:border-secondary dark:hover:border-secondary cursor-pointer hover:shadow-primaryShadow dark:hover:shadow-primaryShadow">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
