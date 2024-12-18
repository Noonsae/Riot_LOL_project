import { Champion } from "@/types/champions";
import { ChampionCard } from "@/components/champion/ChampionCard";

type ChampionCardListProps = {
  title: string;
  champions: Champion[];
};

const ChampionCardList = ({ title, champions }: ChampionCardListProps) => {
  return (
    <div>
      <div className="txt pb-10">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default ChampionCardList;