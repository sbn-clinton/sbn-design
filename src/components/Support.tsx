import Image from "next/image";

const Support = () => {
  return (
    <div className=" bg-gray-50 text-black font-sans">
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 max-w-6xl mx-auto px-4 py-10">
        <div className="md:w-1/2 flex flex-col md:items-start items-center  justify-center gap-5 md:gap-12">
          <h1 className="text-xl md:text-5xl font-bold text-center md:text-left">
            How we support our pratner all over the world
          </h1>
          <p className="text-center text-sm md:text-base md:text-left text-gray-500">
            We are a team of professionals who are passionate about helping you
            achieve your goals. We are here to support you every step of the way
            and help you achieve your dreams in the best way possible.
          </p>
          <div className="flex items-end justify-center gap-4 md:gap-8 md:pl-5">
            <div className="flex flex-col items-center justify-center gap-1 md:gap-3">
              <Image
                src="/images/group/Group6.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h1 className="text-lg md:text-xl font-bold">
                4.9 / 5{" "}
                <span className="text-gray-600 text-sm md:text-base">
                  rating
                </span>
                <p className="text-sm md:text-base text-gray-400">databricks</p>
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 md:gap-3">
              <Image
                src="/images/group/Group7.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h1 className="text-lg md:text-xl font-bold">
                4.8 / 5{" "}
                <span className="text-gray-600 text-sm md:text-base">
                  rating
                </span>
                <p className="text-sm md:text-base text-gray-400">
                  Chainalysis
                </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center gap-5 md:gap-10">
          <div className=" flex flex-row items-start gap-2 md:gap-4">
            <div className="flex items-start">
              <Image
                src="/images/group/activity.png"
                alt="logo"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-center gap-1 md:gap-2">
              <h1 className="text-lg md:text-2xl font-bold text-left">
                Publishing
              </h1>
              <p className="text-left text-sm md:text-lg  text-gray-500">
                Plan,collaborate, and publishing your content that drivees
                meaningful engagement and growth for your band
              </p>
            </div>
          </div>
          <div className=" flex flex-row items-start gap-2 md:gap-4">
            <div className="flex items-start">
              <Image
                src="/images/group/pie-chart.png"
                alt="logo"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-center gap-1 md:gap-2">
              <h1 className="text-lg md:text-2xl font-bold text-left">
                Analytics
              </h1>
              <p className="text-left text-sm md:text-lg  text-gray-500">
                Analyze your performance and create goegeous report
              </p>
            </div>
          </div>
          <div className=" flex flex-row items-start gap-2 md:gap-4">
            <div className="flex items-start">
              <Image
                src="/images/group/command.png"
                alt="logo"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-center gap-1 md:gap-2">
              <h1 className="text-lg md:text-2xl font-bold text-left">
                Engagement
              </h1>
              <p className="text-left text-sm md:text-lg  text-gray-500">
                Quickly navigate you anda engage with your auidience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
