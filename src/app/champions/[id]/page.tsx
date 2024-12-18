import { Metadata } from "next";
import { ChampionDetails } from "@/types/champions";
import { fetchChampionDetails, fetchLatestVersion } from "@/utils/serverApi";
import Detail from "./Details";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const champion: ChampionDetails = await fetchChampionDetails(params.id);
  return {
    title: `League Of Legends : ${champion.name}`,
    description: `${champion.lore}`,
    openGraph: {
      title: `League Of Legends : ${champion.name}`,
      description: `${champion.lore}`,
      url: `https://lol-app-psi.vercel.app//champions/${params.id}`,
    },
  };
}

export default async function DetailPage({ params }: Props) {
  const version: string = await fetchLatestVersion();
  const champion: ChampionDetails = await fetchChampionDetails(params.id);

  return <Detail champion={champion} version={version} />;
}
