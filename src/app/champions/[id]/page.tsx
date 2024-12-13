import { ChampionDetails } from "@/types/champions";
import fetchChampionData from "@/utils/serverApi";
import Image from "next/image";

interface ChampionPageProps {
  params: {
    id: string;
  };
}

export default async function ChampionPage({ params }: ChampionPageProps) {
  const { id } = params;

  try {
    // 데이터 가져오기
    const { data: champions, version } = await fetchChampionData();

    // 챔피언 찾기
    const champion: ChampionDetails | undefined = champions[id];

    if (!champion) {
      console.error(`Champion with id ${id} not found.`);
      return <div>해당 챔피언 정보를 찾을 수 없습니다.</div>;
    }

    // 이미지 URL 생성
    const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`;

    // 디버깅: 로그 확인
    console.log("Champion:", champion);
    console.log("Image URL:", imageUrl);

    // 페이지 렌더링
    return (
      <div className="flex justify-center">
        <div className="p-4 bg-black h-[500px] w-[700px] mt-11">
          <div className="h-[100px] w-[100px] bg-white">
            <h1 className="text-2xl text-black font-bold">{champion.name}</h1>
            <h2 className="text-lg text-gray-600">{champion.title}</h2>
          </div>
          <div className="flex gap-4 mt-4">
            <Image
              src={imageUrl}
              alt={champion.name}
              width={200}
              height={200}
            />
            <p className="text-white">{champion.blurb}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching champion data:", error);
    return <div>오류가 발생했습니다. 다시 시도해주세요.</div>;
  }
}
