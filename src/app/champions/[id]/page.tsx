import { Metadata } from "next";

import { ChampionDetails } from "@/types/champions";

import { fetchChampionDetails, fetchLatestVersion } from "@/utils/serverApi";

import Detail from "./Details";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
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

const DetailPage = async ({ params }: Props) => {

  const version: string = await fetchLatestVersion();
  const champion: ChampionDetails = await fetchChampionDetails(params.id);

  return (
    
      <Detail champion={champion} version={version} />
    
  );
}

export default DetailPage;
