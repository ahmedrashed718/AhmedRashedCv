const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white dark:bg-white text-primary dark:text-primary h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-primary-dark dark:hover:text-primary-dark hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-primary dark:border-primary">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-primary dark:bg-primary absolute top-[50px] -z-10 transition-colors duration-300"></div>
    </div>
  );
};

export default SingleSkill;
