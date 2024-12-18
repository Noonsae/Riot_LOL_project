"use client";

import Image from "next/image";
import {
  LOADING_IMG_URL,
  SPLASH_IMG_URL,
  getPassiveImgUrl,
  getSpellImgUrl,
} from "@/constants/apiUrls";
import {
  ChampionDetails,
  ChampionSkill,
  ChampionSkin,
} from "@/types/champions";
import { Dispatch, SetStateAction, useState } from "react";
import { cleanedText } from "@/utils/cleanText";

type DetailProps = {
  champion: ChampionDetails;
  version: string;
};

type SpellDescriptionType = {
  name: string;
  description: string;
};

export default function Detail({ champion, version }: DetailProps) {
  // keyBoard 정의
  const keyBoard: string[] = ["Q", "W", "E", "R"];

  // spellsWithKeys 배열 생성
  const spellsWithKeys: ChampionSkill[] = champion.spells.map(
    (spell: ChampionSkill, index: number) => ({
      ...spell,
      key: keyBoard[index] ? keyBoard[index] : "",
    })
  );

  const [selectedSpell, setSelectedSpell] =
    useState<SpellDescriptionType | null>(null);

  // 스킬 설명을 보여주는 함수
  const handleShowSpellDescription = (
    setSelectedSpell: React.Dispatch<
      React.SetStateAction<SpellDescriptionType | null>
    >,
    name: string,
    description: string
  ): void => {
    setSelectedSpell(() => ({
      name: name || "",
      description: description || "",
    }));
  };

  return (
    <article className="relative w-full text-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-fixed opacity-80 filter grayscale-[30%] -mt-[80px]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), 
            url(${SPLASH_IMG_URL}/${champion.id}_0.jpg)`,
        }}
      ></div>

      <div className="relative m-auto min-h-screen max-w-custom pb-20 container">
        <div className="flex flex-col gap-1 px-[50px] ">
          {/* Chap Info */}
          <h2 className="text-base font-normal dark:text-[#c8aa6e] text-[#c7a052] text-[32px] -ml-2 font-semibold text-shadow-md">
            {champion.title}
          </h2>
          <p className="text-[26px] mb-2 text-shadow-md">{champion.name}</p>

          <div className="w-[45%]">
            <div className="flex flex-col gap-8">
              <div className="flex items-start justify-center max-w-[200px] max-h-[200px] overflow-hidden rounded-sm shadow-lg">
                <Image
                  src={`${LOADING_IMG_URL}/${champion.id}_0.jpg`}
                  alt={champion.name}
                  width={300}
                  height={300}
                  className="object-cover transform scale-110"
                  priority
                />
              </div>
              <p className="text-4 font-light">{champion.lore}</p>
            </div>
          </div>

          <hr className="dark:border-[#dec99d] border-[#c7a052] my-20" />

          {/* Chap Skills */}
          <h2 className="text-[26px] font-semibold">스킬</h2>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="w-[45%] h-[200px] flex flex-row gap-2 justify-between items-center">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={getPassiveImgUrl(version, champion.passive.image.full)}
                  width={64}
                  height={64}
                  alt={champion.passive.name || ""}
                  className="rounded-sm cursor-pointer"
                  onClick={() =>
                    handleShowSpellDescription(
                      setSelectedSpell,
                      champion.passive.name,
                      champion.passive.description
                    )
                  }
                />
                <div className="flex flex-col justify-start items-center gap-2">
                  <p className="mt-4 text-sm text-center">
                    {champion.passive.name}
                  </p>
                  <span>(P)</span>
                </div>
              </div>

              {spellsWithKeys.map((spell: ChampionSkill) => (
                <div
                  key={spell.id}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    src={getSpellImgUrl(version, spell.image.full)}
                    alt={spell.name}
                    width={64}
                    height={64}
                    priority
                    className="object-cover rounded-sm rounded-sm cursor-pointer"
                    onClick={() =>
                      handleShowSpellDescription(
                        setSelectedSpell,
                        spell.name,
                        spell.description
                      )
                    }
                  />
                  <div className="flex flex-col justify-start items-center gap-2">
                    <p className="mt-4 text-sm text-center">{spell.name}</p>
                    <span>({spell.key})</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-center items-start mb-5">
              {selectedSpell ? (
                <>
                  <h3 className="text-[21px] font-bold mb-2">
                    {selectedSpell.name}
                  </h3>
                  <p className="text-md">
                    {cleanedText(selectedSpell.description)}
                  </p>
                </>
              ) : (
                <p className="text-md text-[#] mx-auto">
                  스킬 아이콘을 클릭해 주세요.
                </p>
              )}
            </div>
          </div>

          <hr className="dark:border-[#dec99d] border-[#c7a052] my-20" />

          {/* 챔피언 스킨 */}
          <h2 className="text-[26px] font-semibold mb-10">챔피언 스킨</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {champion.skins.map((skin: ChampionSkin) => (
              <div key={skin.id} className="mb-8 ">
                <Image
                  src={`${SPLASH_IMG_URL}/${champion.id}_${skin.num}.jpg`}
                  alt={skin.name}
                  width={260}
                  height={154}
                  priority
                  className="object-cover rounded-sm"
                />
                <p className="mt-2 text-center">
                  {skin.name.toLowerCase() === "default"
                    ? "기본 스킨"
                    : skin.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
