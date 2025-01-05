import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#F8FAFF] text-center max-w-6xl mx-auto gap-y-5 md:gap-y-10 py-10">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto py-3">
          <Image
            src="/images/profile.png"
            alt="logo"
            width={300}
            height={300}
          />
          <h1 className="text-[48px] font-bold text-[212121] font-sans">
            UX_ASIM
          </h1>
          <p className="text-[32px] font-bold text-[212121] font-sans">
            UI/UX & Product Designer
          </p>
        </div>
        <Image
          src="/images/line.png"
          alt="logo"
          width={500}
          height={1}
          className="w-[400px] md:w-[962px]  fill-[#D9D9D9] stroke-[#C1CBFF] stroke-3 "
        />
        <div className="w-[962px Fill] h-[120px Hug] flex flex-col items-center justify-center">
          <p className="w-4/5 md:w-2/3 fill-[#00189F] fill-opacity-[100%] font-['Poppins'] text-[#00189F] text-[32px] font-bold text-center leading-[60px] tracking-[-0.15px]">
            See my profiles, portfolios, and my products at the following links
            👇👇👇
          </p>
        </div>
        <div className="flex flex-row items-center gap-3 md:gap-7 w-[111px Hug] h-[48px Hug] justify-center px-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/link.png"
              alt="logo"
              width={48}
              height={48}
              className="fill-[#00189F] fill-opacity-[100%] w-[28px] h-[28px] md:w-[48px] md:h-[48px]"
            />
            <p className="text-[#304FFE] text-[18px] md:text-[32px] font-['Poppins'] font-bold leading-[48px] tracking-[-0.15px]">
              LinkedIn
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <Image
              src="/images/instagram.png"
              alt="logo"
              width={48}
              height={48}
              className="fill-[#00189F] fill-opacity-[100%] w-[28px] h-[28px] md:w-[48px] md:h-[48px]"
            />
            <p className="text-[#304FFE]  text-[18px] md:text-[32px] font-['Poppins'] font-bold leading-[48px] tracking-[-0.15px]">
              Instagram
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/behance.png"
              alt="logo"
              width={48}
              height={48}
              className="fill-[#00189F] fill-opacity-[100%] w-[28px] h-[28px] md:w-[48px] md:h-[48px]"
            />
            <p className="text-[#304FFE]  text-[18px] md:text-[32px] font-['Poppins'] font-bold leading-[48px] tracking-[-0.15px]">
              Behance
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/dribble.png"
              alt="logo"
              width={48}
              height={48}
              className="fill-[#00189F] fill-opacity-[100%] w-[28px] h-[28px] md:w-[48px] md:h-[48px]"
            />
            <p className="text-[#304FFE]  text-[18px] md:text-[32px] font-['Poppins'] font-bold leading-[48px] tracking-[-0.15px]">
              Dribble
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 md:gap-7 w-[111px Hug] h-[48px Hug] justify-center px-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/fiver.png"
              alt="logo"
              width={48}
              height={48}
              className="fill-[#00189F] fill-opacity-[100%] w-[28px] h-[28px] md:w-[48px] md:h-[48px]"
            />
            <p className="text-[#304FFE] text-[18px] md:text-[32px] font-['Poppins'] font-bold leading-[48px] tracking-[-0.15px]">
              Fiverr
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <Image
              src="/images/upwork.png"
              alt="logo"
              width={48}
              height={48}
              className="fill-[#00189F] fill-opacity-[100%] w-[28px] h-[28px] md:w-[48px] md:h-[48px]"
            />
            <p className="text-[#304FFE]  text-[18px] md:text-[32px] font-['Poppins'] font-bold leading-[48px] tracking-[-0.15px]">
              Upwork
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/x.png"
              alt="logo"
              width={48}
              height={48}
              className="fill-[#00189F] fill-opacity-[100%] w-[28px] h-[28px] md:w-[48px] md:h-[48px]"
            />
            <p className="text-[#304FFE]  text-[18px] md:text-[32px] font-['Poppins'] font-bold leading-[48px] tracking-[-0.15px]">
              Xing
            </p>
          </div>
        </div>

        <p className="text-[#00189F] text-[18px] md:text-[32px] font-['Poppins'] font-bold leading-[35px] md:leading-[64px] tracking-[0.15px] text-wrap px-5">
          Design samples & get previews for inspiration and personal use only.
          Don&apos;t selling, reselling & commercial use it without permission.
          You can get more information about this design on my{" "}
          <Link href={"/"} className="text-[#EB5757]">
            {" "}
            Figma Community
          </Link>{" "}
          profile page. Thank you
        </p>

        <div className="flex flex-col items-center justify-center gap-3 md:gap-6">
          <h1 className="text-[#00189F] text-[32px] md:text-[64px] font-['Poppins'] font-bold leading-[35px] md:leading-[64px] tracking-[0.15px] ">
            Need Custom Design
          </h1>
          <p className="text-[#00189F] text-[18px] md:text-[32px] font-['Poppins'] font-bold leading-[35px] md:leading-[64px] tracking-[0.15px] text-wrap">
            Please Contact With My Email 👇👇👇
          </p>
        </div>
        <p className="text-[#00189F] text-[24px] md:text-[32px] font-['Poppins'] font-bold leading-[35px] md:leading-[64px] tracking-[0.15px] text-wrap px-5 underline">
          <Link href="/" className="text-[#EB5757]">
            ux.asimbaig@gmail.com
          </Link>
        </p>
      </div>
    </>
  );
};

export default AboutPage;
