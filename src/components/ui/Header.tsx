import Link from "next/link";
import Image from "next/image";
import DarkMode from "./DarkMode";

const Header = () => {

  return (
    <header className="w-full h-20 fixed top-0 flex dark:bg-black dark:border-none bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.2)] z-10">
      {/* Logo */}
      <div className="w-full max-w-[1300px] px-[4%] mx-auto flex items-center justify-between">
        <h1 className="mr-4">
          <Link href="/" className="flex item-center p-[10px] -ml-[10px]">
            <Image
              aria-hidden
              src="/icons/bee.png"
              alt="Home Icon"
              width={36}
              height={36}
            />
            <p className="leading-[36px] ml-2 text-[24px] font-bold">LoLa</p>
          </Link>
        </h1>

        {/* Nav */}
        <ul className="w-[75%] flex justify-between">
          <li className="font-bold ">
            <Link
              href={"/intro"}
              className="p-[10px] -ml-[10px] hover:text-blue-400 transition-colors duration-200"
            >
              게임소개
            </Link>
          </li>
          <li className="font-bold">
            <Link
              href={"/champions"}
              className="p-[10px] -ml-[10px] hover:text-blue-400 transition-colors duration-200"
            >
              챔피언
            </Link>
          </li>
          <li className="font-bold">
            <Link
              href={"/items"}
              className="p-[10px] -ml-[10px] hover:text-blue-400 transition-colors duration-200"
            >
              아이템
            </Link>
          </li>
          <li className="font-bold">
            <Link
              href={"/rotation"}
              className="p-[10px] -ml-[10px] hover:text-blue-400 transition-colors duration-200"
            >
              로테이션
            </Link>
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;