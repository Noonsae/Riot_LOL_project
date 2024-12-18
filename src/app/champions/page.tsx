import { Metadata } from "next";
import { Champion } from "@/types/champions";
import { fetchChampionData } from "@/utils/serverApi";
import { ChampionCard } from "@/components/champion/ChampionCard";

export const metadata: Metadata = {
  title: "League Of Legends : 챔피언 목록",
  description:
    "Riot API를 이용해 리그 오브 레전드의 모든 챔피언 목록을 확인하세요.",
  openGraph: {
    title: "League Of Legends : 챔피언 목록",
    description:
      "Riot API를 이용해 리그 오브 레전드의 모든 챔피언 목록을 확인하세요.",
    url: "https://lol-app-psi.vercel.app//champions",
  },
};

export default async function ChampionsPage() {
  const championList: Champion[] = await fetchChampionData();

  return (
    <>
      <article className="flex flex-col gap-10 min-h-screen pb-20 m-auto">
        <div className="">
          <h2 className="text-3xl font-bold">챔피언 목록</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {championList.map((champion: Champion) => (
            <ChampionCard key={champion.id} champion={champion} />
          ))}
        </div>
      </article>
    </>
  );
}
