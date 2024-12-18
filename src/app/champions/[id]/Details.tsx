"use client";

import { useState } from "react";

import { LOADING_IMG_URL, SPLASH_IMG_URL } from "@/constants/apiUrls";

import { ChampionDetails } from "@/types/champions";

import ChampionInfo from "@/components/champion/details/ChampionInfo";
import ChampionSkins from "@/components/champion/details/ChampionSkins";
import ChampionSkills from "@/components/champion/details/ChampionSkills";

type DetailProps = {
  champion: ChampionDetails;
  version: string;
};

const Detail = ({ champion, version }: DetailProps) => {
  const spellsWithKeys = champion.spells.map((spell, index) => ({
    ...spell,
    key: ["Q", "W", "E", "R"][index], // 바로 키를 매핑
  }));

  const [selectedSpell, setSelectedSpell] = useState<{
    name: string;
    description: string;
  } | null>(null);

  return (
    <section className="relative w-full text-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-fixed opacity-80 filter grayscale-[30%] -mt-[80px] indent-[9999px]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), 
            url(${SPLASH_IMG_URL}/${champion.id}_0.jpg)`,
        }}
      >
        스플래쉬 이미지 배경
      </div>

      <div className="relative m-auto min-h-screen max-w-custom pb-20 container px-[50px]">
        {/* Chap Info */}
        <ChampionInfo
          title={champion.title}
          name={champion.name}
          lore={champion.lore}
          imgUrl={`${LOADING_IMG_URL}/${champion.id}_0.jpg`}
        />

        <hr className="dark:border-[#dec99d] border-[#c7a052] my-20" />

        {/* Champ Skills */}
        <ChampionSkills
          passive={champion.passive}
          spells={spellsWithKeys}
          version={version}
          selectedSpell={selectedSpell}
          setSelectedSpell={setSelectedSpell}
        />

        <hr className="dark:border-[#dec99d] border-[#c7a052] my-20" />

        {/* Champ Skin */}
        <ChampionSkins skins={champion.skins} championId={champion.id} />
      </div>
    </section>
  );
};

export default Detail;
