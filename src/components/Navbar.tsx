import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="pt-0 md:pt-4 lg:pt-8 xl:pt-8 px-0 md:px-16 lg:px-20 xl:px-24 flex flex-col justify-between md:flex-row items-center">
      <div className="flex items-center justify-center ">
        <Image src="/icon.svg" alt="Icon" className="w-2/3 md:w-full " width={400} height={200} />
      </div>
      <ul className="flex flex-col justify-center space-x-4 md:flex-row">
        <Link
          href="/"
          className="text-lg md:text-lg lg:text-xl xl:text-2xl text-center mt-2 md:mt-0 mr-0 md:mr-5 hover:text-gray-500"
        >
          Home
        </Link>
        <Link
          href="/news"
          className="text-lg md:text-lg lg:text-xl xl:text-2xl text-center mt-2 md:mt-0 mr-0 md:mr-5 hover:text-gray-500"
        >
          Features News
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
