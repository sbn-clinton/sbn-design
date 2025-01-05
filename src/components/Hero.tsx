import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-gradient-to-b to-r from-orange-200 to-orange-50 text-black  pt-24 md:pt-44 pb-20 flex flex-col items-center justify-center gap-5 md:gap-16  font-sans">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-6xl mx-auto px-4 md:px-0 items-center justify-center">
        <div className="flex flex-col items-center justify-center md:items-start md:w-1/2 gap-6 md:gap-10">
          <div className="flex flex-col items-center justify-center md:items-start gap-3 md:gap-8 ">
            <h1 className="text-3xl md:text-6xl font-bold md:font-extrabold text-center md:text-left md:tracking-widest tracking-normal">
              We&apos;re here to Increase Your Productivity
            </h1>
            <Image
              src="/images/round-line.png"
              alt="logo"
              width={400}
              height={1}
              className="w-4/6 md:w-5/6 "
            />
          </div>

          <div className="flex text-center md:text-left md:pr-14">
            <p className="font-medium text-sm md:text-lg">
              Lets&apos;s make your work more organized and easily using the
              Taskio Dashboard with many of the latest featuresin managing work
              every day.
            </p>
          </div>
          <div className="flex items-center justify-center  gap-3 md:gap-6">
            <button className=" bg-[#F96C3B] text-white rounded-badge font-light  btn-xs md:btn-sm hover:bg-[#F96C3B]/80 border-none">
              Try free trial
            </button>
            <div className="flex items-center justify-center gap-1 md:gap-2">
              <PlayCircleIcon className="w-4 h-4 md:w-6 md:h-6 " />
              <span className="text-xs md:text-base">View Demo</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <div className=" flex justify-center items-start">
            <Image
              src="/images/group.png"
              alt="logo"
              width={1000}
              height={1000}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-10 max-w-6xl mx-auto px-4">
        <h1 className="text-xl md:text-4xl font-bold text-center font-sans">
          More Than 25,000 teams use Collabs
        </h1>
        <div className="flex flex-row gap-6 md:gap-12 items-center justify-center flex-wrap">
          <Image
            src="/images/group/Group1.png"
            alt="logo"
            width={80}
            height={80}
          />
          <Image
            src="/images/group/Group2.png"
            alt="logo"
            width={80}
            height={80}
          />
          <Image
            src="/images/group/Group3.png"
            alt="logo"
            width={80}
            height={80}
          />
          <Image
            src="/images/group/Group4.png"
            alt="logo"
            width={80}
            height={80}
          />
          <Image
            src="/images/group/Group5.png"
            alt="logo"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
