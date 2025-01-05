import { Quote } from "lucide-react";
import Image from "next/image";

const FooterForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-18 max-w-6xl mx-auto px-4 font-sans text-gray-400">
      <div className="md:w-1/2 flex flex-col items-start text-left gap-5 md:gap-8 px-3 md:px-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white ">
          What People are Saying About Us
        </h1>
        <p className="text-xs md:text-base  font-bold">
          Everything you need to accept to be a part of our community and grow
          with us as a user.
        </p>
        <Quote className="w-4 h-4 md:w-7 md:h-7 text-2xl" />
        <p className="text-xs md:text-base  font-bold">
          I am a huge fan of your product. I have been using it for a while and
          I really like it. I am very happy with the design and the features you
          have to offer. I am very happy with the design and the features you
        </p>
        <div className="flex items-center justify-center gap-4  my-2">
          <Image
            src="/images/ellipse/Ellipse1.png"
            alt="logo"
            width={40}
            height={40}
          />
          <Image
            src="/images/ellipse/Ellipse2.png"
            alt="logo"
            width={40}
            height={40}
          />
          <Image
            src="/images/ellipse/Ellipse3.png"
            alt="logo"
            width={40}
            height={40}
          />
          <Image
            src="/images/ellipse/Ellipse4.png"
            alt="logo"
            width={40}
            height={40}
          />
          <Image
            src="/images/ellipse/Ellipse5.png"
            alt="logo"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="md:w-1/2 flex items-center text-gray-200 px-3 md:px-10">
        <div className="flex flex-col items-center justify-center px-14 py-8 bg-[#222938] min-w-full gap-5 rounded-xl">
          <div className="flex flex-col items-center justify-center gap-3">
            <Image
              src="/images/ellipse/Ellipse6.png"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="font-bold text-xl md:text-3xl">Get Started</h1>
          </div>
          <form className="flex flex-col gap-3  text-left min-w-full">
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs md:text-base font-semibold">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-sm md:input-md input-bordered w-full "
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs md:text-base font-semibold">
                Message
              </label>
              <textarea
                placeholder="What are you looking for?"
                className="textarea textarea-sm md:textarea-md textarea-bordered w-full "
              />
            </div>
            <button className=" btn btn-xs md:btn-sm bg-[#F96C3B] font-semibold hover:bg-[#F96C3B]/80 text-white border-none">
              Send Message
            </button>
            <p className="text-sm md:text-base font-semibold text-right">
              <span className="font-extralight text-xs md:text-sm mr-1">
                or
              </span>
              Start Free Trial
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
