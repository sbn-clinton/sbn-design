import Pricing from "./Pricing";

const Plan = () => {
  return (
    <div className="bg-gradient-to-r to-r from-orange-50 to-gray-50 text-black font-sans py-5 md:py-10">
      <div className="flex flex-col gap-5 max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Choose Plan{" "}
            <span className=" block mt-1 md:mt-2">
              {" "}
              That&apos;s Right For You
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-bold">
            Choose the plan that works best for you, feel free to contact us
          </p>
        </div>
        <div className="">
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default Plan;
