import { LOADING_IMG_URL } from "@/constants/apiUrls";
import { Champion } from "@/types/champions";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = {
  champion: Champion;
};

export function ChampionCard({ champion }: ChampionCardProps) {
  const IMAGE_URL = `${LOADING_IMG_URL}/${champion.id}_0.jpg`;

  return (
    <Link
      href={`/champions/${champion.id}`}
      className={`dark:bg-black dark:text-white items-center cursor-pointer w-[150px] h-[250px]  mb-6`}
    >
      {/* 이미지 */}

      <div className="w-[150px] h-[200px]">
        <Image
          src={IMAGE_URL}
          alt={champion.name}
          width={100}
          height={100}
          className="w-full object-cover"
        />
      </div>

      {/* 내용 */}
      <p className="text-lg font-semibold text-white text-center text-shadow-lg py-4">
        {champion.name}
      </p>
    </Link>
  );
}
