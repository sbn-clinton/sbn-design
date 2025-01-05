import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" bg-inherit backdrop-blur-md bg-opacity-25 fixed top-0 left-0 right-0 z-50 font-sans">
      <nav className="flex items-center justify-between max-w-6xl mx-auto p-4 md:py-5  ">
        <div className="flex items-center justify-center">
          <h1 className="font-extrabold md:text-2xl text-lg text-[#F96C3B]">
            SBN
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center justify-center gap-x-4 md:gap-x-6 text-[#A6A6A6] text-lg font-medium">
            <li className="text-[#000000] text-lg font-medium">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/products">Products</Link>
            </li>
            <li className="">
              <Link href="/about">About</Link>
            </li>
            <li className="">
              <Link href="/questions">FAQ</Link>
            </li>
            <li className="">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-x-4 md:gap-x-6 text-[#A6A6A6] text-lg font-medium">
          <Link href="/" className="text-sm md:text-base">
            Login
          </Link>
          <button className="bg-[#F96C3B] text-[#FFFFFF] btn border-none btn-xs md:btn-sm hover:bg-[#F96C3B]/80 ">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
