import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <h2 className="text-6xl text-primary dark:text-primary mb-10 text-center transition-colors duration-300">Contact Me</h2>
      <div className="flex justify-between gap-24 bg-white/30 dark:bg-darkBrown-light backdrop-blur-md p-8 rounded-2xl lg:flex-row sm:flex-col border border-primary/20 transition-colors duration-300">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
