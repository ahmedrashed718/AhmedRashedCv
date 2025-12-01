const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-primary dark:border-primary text-primary dark:text-primary rounded-full p-3 flex items-center justify-center transition-all duration-300 hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white cursor-pointer">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
