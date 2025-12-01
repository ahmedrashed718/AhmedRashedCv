const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-primary dark:text-primary mb-10 transition-colors duration-300">About Me</h2>
      <p>
        I’m Ahmed, Front-End & Cross-Platform Developer with a passion for
        mobile app and web development. Skilled in quickly learning new
        technologies and translating UI/UX designs into high-performance,
        responsive code. Seeking to contribute to a team of talented developers
        creating innovative mobile apps.
      </p>
      <a
        href="/src/assets/Ahmed Rashed.pdf" // حط هنا المسار الصحيح لملف الـ CV
        download="Ahmed-Rashed-CV.pdf"
        className="border border-primary rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer md:self-start sm:self-center text-primary dark:text-white dark:hover:bg-primary"
      >
        Download CV
      </a>
    </div>
  );
};

export default AboutMeText;
