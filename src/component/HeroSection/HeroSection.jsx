import { HiPlus } from "react-icons/hi";

const HeroSection = () => {
    return (
        <div className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#1a303d] mb-6 tracking-tight">
          Friends to keep close in your life
        </h1>

        {/* Subtext / Description */}
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Add a Friend Button */}
        <div className="flex justify-center">
          <button className="btn bg-[#244d40] hover:bg-[#1a3a30] text-white border-none px-8 py-3 rounded-md flex items-center gap-2 normal-case text-lg">
            <HiPlus className="text-xl" />
            Add a Friend
          </button>
        </div>

      </div>
    </div>
    );
};

export default HeroSection;