import CinematicBackground from "@/components/ui/CinematicBackground";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="grid justify-items-center m-auto max-w-custom container h-[calc(100vh-320px)]">
      <CinematicBackground />
      <article className="w-full max-w-[1200px] flex flex-col justify-center -mt-10 gap-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform">
        <div className="text-center">
          <p className="text-[26px] dark:font-medium font-bold mb-[60px] sm:w-[80%] mx-auto lg:w-full">
            Riot Games API를 통해 챔피언과 아이템 정보를 쉽고 빠르게
            제공해드립니다.
          </p>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center justify-items-center">
            <li>
              <Link
                href={"/introduce"}
                className="flex flex-col gap-6 items-center justify-center"
              >
                <Image
                  src="/images/Teemo.webp"
                  alt="image"
                  width={300}
                  height={200}
                  priority
                />
                <p className="dark:font-medium font-bold text-[22px]">
                  게임소개
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={"/champions"}
                className="flex flex-col gap-6 items-center justify-center"
              >
                <Image
                  src="/images/Ornn.webp"
                  alt="image"
                  width={300}
                  height={200}
                  priority
                />
                <p className="dark:font-medium font-bold text-[22px]">
                  챔피언 목록 보기
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={"/items"}
                className="flex flex-col gap-6 items-center justify-center"
              >
                <Image
                  src="/images/Lillia.webp"
                  alt="image"
                  width={300}
                  height={200}
                  priority
                />
                <p className="dark:font-medium font-bold text-[22px]">
                  아이템 목록 보기
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={"/rotation"}
                className="flex flex-col gap-6 items-center justify-center"
              >
                <Image
                  src="/images/Ashe.webp"
                  alt="image"
                  width={300}
                  height={200}
                  priority
                />
                <p className="dark:font-medium font-semibold text-[22px]">
                  금주 로테이션 확인
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
