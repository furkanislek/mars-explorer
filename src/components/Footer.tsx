import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <nav className="py-0 md:py-1 xl:pt-8  2xl:pt-12  px-0 lg:px-[1%] xl:px-[10%] flex flex-col justify-between md:flex-row items-center pb-10">
      <div className="flex items-center justify-center ">
        <Image
          src="/icon.svg"
          alt="Icon"
          className="w-2/3 md:w-full "
          width={300}
          height={150}
        />
      </div>
      <ul className="flex flex-col justify-center space-x-4 md:flex-row">
        <Link
          href="#"
          className="text-md text-center mt-2 md:mt-0 mr-0 md:mr-5 text-[#FD9727] hover:text-gray-500"
        >
          contact@marsexplorer.com
        </Link>
        <Link
          href="#"
          className="text-md text-center mt-2 md:mt-0 mr-0 md:mr-5 hover:text-gray-500"
        >
          Privacy policy
        </Link>
        <Link
          href="#"
          className="text-md text-center mt-2 md:mt-0 mr-0 md:mr-5 hover:text-gray-500"
        >
          Terms & Agreements{" "}
        </Link>
      </ul>
    </nav>
  );
};

export default Footer;
