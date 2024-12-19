import Image from "next/image";
import { ChampionPassive, ChampionSkill } from "@/types/champions";
import { getPassiveImgUrl, getSpellImgUrl } from "@/constants/apiUrls";
import { cleanedText } from "@/utils/cleanText";

type ChampionSkillsProps = {
  passive: ChampionPassive;
  spells: ChampionSkill[];
  version: string;
  selectedSpell: { name: string; description: string } | null;
  setSelectedSpell: React.Dispatch<
    React.SetStateAction<{ name: string; description: string } | null>
  >;
};

const ChampionSkills = ({
  passive,
  spells,
  version,
  selectedSpell,
  setSelectedSpell,
}: ChampionSkillsProps) => {
  const commonImageClasses = "rounded-sm cursor-pointer";

  return (
    <article>
      <h2 className="text-[26px] font-semibold">스킬</h2>
      <div className="w-full flex flex-row justify-between items-center">
        {/* Passive Skill */}
        <div className="w-[45%] h-[200px] flex flex-row gap-2 justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={getPassiveImgUrl(version, passive.image.full)}
              width={64}
              height={64}
              alt={passive.name}
              className={`${commonImageClasses} transform transition-transform duration-200 hover:scale-110`}
              onClick={() =>
                setSelectedSpell({
                  name: passive.name,
                  description: passive.description,
                })
              }
            />
            <div className="flex flex-col justify-start items-center gap-2">
              <p className="mt-4 text-sm text-center">{passive.name}</p>
              <span>({passive.key || "P"})</span>
            </div>
          </div>

          {/* Active Spells */}
          {spells.map((spell) => (
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
                className={`${commonImageClasses} transform transition-transform duration-200 hover:scale-110`}
                onClick={() =>
                  setSelectedSpell({
                    name: spell.name,
                    description: spell.description,
                  })
                }
              />
              <div className="flex flex-col justify-start items-center gap-2">
                <p className="mt-4 text-sm text-center">{spell.name}</p>
                <span>({spell.key})</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Description */}
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
            <p className="text-[22px] text-center text-white/80 w-full">
              스킬 아이콘을 클릭해 주세요.
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default ChampionSkills;
