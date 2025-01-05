import { CheckCircle2Icon } from "lucide-react";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="  bg-gradient-to-r to-r from-orange-50 to-gray-50 text-black font-sans">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-5 md:gap-10 w-full md:w-1/2 ">
          <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left">
            What Benefit You Will Get
          </h1>
          <ul className="flex flex-col gap-4 md:gap-6 pl-4 md:pl-0">
            <li className="text-sm md:text-base flex gap-2">
              <CheckCircle2Icon className="text-orange-500 w-5 h-5" />
              <span className="text-sm md:text-base text-gray-500 font-bold">
                Free Consulting With Expert Saving Money
              </span>
            </li>
            <li className="text-sm md:text-base flex gap-2">
              <CheckCircle2Icon className="text-orange-500 w-5 h-5" />
              <span className="text-sm md:text-base text-gray-500 font-bold">
                Online Banking
              </span>
            </li>
            <li className="text-sm md:text-base flex gap-2">
              <CheckCircle2Icon className="text-orange-500 w-5 h-5" />
              <span className="text-sm md:text-base text-gray-500 font-bold">
                Investment Report Every Month
              </span>
            </li>
            <li className="text-sm md:text-base flex gap-2">
              <CheckCircle2Icon className="text-orange-500 w-5 h-5" />
              <span className="text-sm md:text-base text-gray-500 font-bold">
                Saving Money For The Future
              </span>
            </li>
            <li className="text-sm md:text-base flex gap-2">
              <CheckCircle2Icon className="text-orange-500 w-5 h-5" />
              <span className="text-sm md:text-base text-gray-500 font-bold">
                Online Transaction
              </span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex items-center justify-center ">
          <Image
            src="/images/group/Group8.png"
            alt="logo"
            width={600}
            height={600}
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
