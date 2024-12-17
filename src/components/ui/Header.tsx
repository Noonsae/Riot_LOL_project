import Link from "next/link";
import Image from "next/image";
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-32 p-3 border-b dark:border-b-white border-t-0 fixed w-full dark:bg-black bg-white z-10">
      {/* Logo */}
      <h1>
        <Link href="/">
          <Image
            aria-hidden
            src="/icons/bee.png"
            alt="Home Icon"
            width={36}
            height={36}
          />
        </Link>
      </h1>

      {/* Nav */}
      <div className="pr-2">
        <ul className="flex gap-24">
          <li className="font-bold">
            <Link href={"/champions"}>챔피언</Link>
          </li>
          <li className="font-bold">
            <Link href={"/items"}>아이템</Link>
          </li>
          <li className="font-bold">
            <Link href={"/rotation"}>로테이션</Link>
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </div>
    </header>
  );
}
