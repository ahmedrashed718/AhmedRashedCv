import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import SubHeroMain from "../subHeroSection/SubHeroMain";

const HeroMain = () => {
  return (
    <div className="w-full min-h-screen pt-40 flex flex-col relative">
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="flex md:flex-row sm:flex-col w-full max-w-[1400px] mx-auto justify-between items-center relative px-4 md:px-8">
          <HeroText />
          <HeroPic />
        </div>
      </div>
      
      {/* Sub Hero Section at the bottom */}
      <div className="w-full mt-auto">
        <SubHeroMain />
      </div>
    </div>
  );
};

export default HeroMain;
