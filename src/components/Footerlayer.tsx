import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Footerlayer = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-18 md:flex-row max-w-6xl mx-auto px-4 text-gray-400 font-sans">
      <div className=" flex flex-col text-left gap-5 md:px-10">
        <h1 className="font-bold text-2xl md:text-4xl text-[#F96C3B]">
          Biccas
        </h1>
        <p className="text-xs md:text-base font-bold">
          Everything you need to accept to be a part of with us as a user.
        </p>
        <div className="flex items-center justify-between py-1 border-2 border-gray-500 rounded-3xl px-1 w-3/4">
          <input
            className="font-bold text-sm md:text-base input border-none w-full input-xs md:input-sm bg-inherit"
            type="text"
            placeholder="Enter your email here"
          />
          <div className="flex items-center justify-center p-2 rounded-full bg-[#F96C3B]">
            <ArrowRight className="w-4 h-4 text-gray-200" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-left md:px-6 md:items-center md:justify-center">
        <ul className="space-y-1 md:space-y-2">
          <h1 className="md:text-xl font-bold mb-3 text-gray-300">Support</h1>
          <li className="text-sm md:text-base">
            <Link href="#" className="text-gray-400">
              Help center
            </Link>
          </li>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              Account Information
            </Link>
          </li>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              About
            </Link>
          </li>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              Contact Us
            </Link>
          </li>
        </ul>
        <ul className="space-y-1 md:space-y-2">
          <h1 className="md:text-xl font-bold mb-3 text-gray-300">
            Help and Solution
          </h1>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              Talk to support
            </Link>
          </li>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              Support docs
            </Link>
          </li>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              System status
            </Link>
          </li>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              Covid responde
            </Link>
          </li>
        </ul>
        <ul className="space-y-1 md:space-y-2">
          <h1 className="md:text-xl font-bold mb-3 text-gray-300">Product</h1>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              Update
            </Link>
          </li>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              Security
            </Link>
          </li>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              Beta test
            </Link>
          </li>
          <li className="text-xs md:text-base">
            <Link href="#" className="text-gray-400">
              Pricing product
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footerlayer;
