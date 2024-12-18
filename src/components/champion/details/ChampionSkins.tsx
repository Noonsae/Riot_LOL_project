import Image from "next/image";
import { ChampionSkin } from "@/types/champions";
import { SPLASH_IMG_URL } from "@/constants/apiUrls";

type ChampionSkinsProps = {
  skins: ChampionSkin[];
  championId: string;
};

const ChampionSkins = ({ skins, championId }: ChampionSkinsProps) => (
  <article>
    <h2 className="text-[26px] font-semibold mb-10">챔피언 스킨</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skins.map((skin) => (
        <div key={skin.id} className="mb-8">
          <Image
            src={`${SPLASH_IMG_URL}/${championId}_${skin.num}.jpg`}
            alt={skin.name}
            width={260}
            height={154}
            className="object-cover rounded-sm"
          />
          <p className="mt-2 text-center">
            {skin.name.toLowerCase() === "default" ? "기본 스킨" : skin.name}
          </p>
        </div>
      ))}
    </div>
  </article>
);

export default ChampionSkins;
