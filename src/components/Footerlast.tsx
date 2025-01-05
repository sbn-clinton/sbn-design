const Footerlast = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between justify-center max-w-6xl mx-auto px-4 text-gray-300 font-sans gap-1">
      <div className="flex items-center justify-center">
        <p className="text-xs md:text-base font-bold">
          Copyright © 2024{" "}
          <span className="font-extrabold text-[#F96C3B]">SBN.</span> All rights
          reserved.
        </p>
      </div>
      <div className=" flex items-center justify-center">
        <p className="text-xs md:text-base font-bold">
          Term and Conditions - Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footerlast;
