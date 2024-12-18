import { Metadata } from "next";
import { ChampionDetails } from "@/types/champions";

import { fetchChampionDetails, fetchLatestVersion } from "@/utils/serverApi";
import Detail from "./Details";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const champion: ChampionDetails = await fetchChampionDetails(params.id);
  return {
    title: `League Of Legends : ${champion.name}`,
    description: `${champion.lore}`,
    openGraph: {
      title: `League Of Legends : ${champion.name}`,
      description: `${champion.lore}`,
      url: `https://lol-app-psi.vercel.app/champions/${params.id}`,
    },
  };
};

// 서버에서 데이터를 가져오는 비동기 함수
const fetchData = async (id: string) => {
  const [version, champion] = await Promise.all([
    fetchLatestVersion(),
    fetchChampionDetails(id),
  ]);
  return { version, champion };
};

const DetailPage = async ({ params }: Props) => {
  // 서버에서 데이터를 가져옴
  const { version, champion } = await fetchData(params.id);

  return <Detail champion={champion} version={version} />;
};

export default DetailPage;
