const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-primaryMediumShadow dark:shadow-primaryMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
      <div className="shadow-primaryMediumShadow dark:shadow-primaryMediumShadow absolute top-[5%] left-0 -z-10 opacity-50"></div>
      <div className="shadow-secondaryShadow dark:shadow-secondaryShadow absolute top-0 right-0 -z-10 animate-pulse opacity-70"></div>
      <div className="shadow-secondaryShadow dark:shadow-secondaryShadow absolute top-[10%] left-0 -z-10 opacity-50"></div>
    </div>
  );
};

export default HeroGradient;
