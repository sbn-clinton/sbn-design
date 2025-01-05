import Image from "next/image";

const Features = () => {
  return (
    <div className="  bg-gradient-to-r to-r from-orange-50 to-gray-50 text-black font-sans">
      <div className="flex flex-col gap-5 md:gap-10 max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-3">
          <div className="md:w-2/6">
            <h1 className="text-xl md:text-4xl font-bold font-sans">
              Our Features you can get
            </h1>
          </div>
          <div className="md:w-4/6 md:px-10">
            <p className="text-sm md:text-base font-normal text-center font-sans text-gray-500">
              We offer a variety of interesting features that can help increase
              your productivity at work and manage your project easily.
            </p>
          </div>
          <div className="md:w-2/6 flex  items-center justify-center ">
            <button className=" bg-[#F96C3B] text-white rounded-badge font-light text-sm md:text-base px-4 py-2 md:px-6 md:py-3 ">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex flex-col gap-2 border-2 border-gray-50 bg-gray-50 w-4/5 md:w-1/3  p-4 rounded-md">
            <Image
              src="/images/group/Frame1.png"
              alt="feature-1"
              width={500}
              height={300}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl md:text-2xl font-bold">
                Collaboration Teams
              </h1>
              <p className="text-sm md:text-base text-gray-500">
                Collaborate with your team members and get the best results with
                team virtually.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-2 border-gray-50 bg-gray-50 w-4/5 md:w-1/3  p-4 rounded-md">
            <Image
              src="/images/group/Frame2.png"
              alt="feature-1"
              width={500}
              height={300}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl md:text-2xl font-bold">Cloud Storage</h1>
              <p className="text-sm md:text-base text-gray-500">
                No need to worry about storage because we provide storage up to
                2 TB
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-2 border-gray-50 bg-gray-50 w-4/5 md:w-1/3  p-4 rounded-md">
            <Image
              src="/images/group/Frame3.png"
              alt="feature-1"
              width={500}
              height={300}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl md:text-2xl font-bold">Daily Analytics</h1>
              <p className="text-sm md:text-base text-gray-500">
                We always provide useful information to make it easier for you
                every day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
