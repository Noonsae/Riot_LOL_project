import Link from "next/link";
import Image from "next/image";
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <header className="w-full h-20 fixed top-0 flex dark:bg-black dark:border-none bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.2)] z-10">
      {/* Logo */}
      <div className="w-full max-w-[1300px] px-[4%] mx-auto flex items-center justify-between">
        <h1 className="mr-4">
          <Link href="/" className="flex item-center">
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
          <li className="font-bold">게임소개</li>
          <li className="font-bold">
            <Link href={"/champions"}>챔피언</Link>
          </li>
          <li className="font-bold">
            <Link href={"/items"}>아이템</Link>
          </li>
          <li className="font-bold">
            <Link href={"/rotation"}>로테이션</Link>
          </li>
        </ul>
        <DarkMode />
      </div>
    </header>
  );
}
