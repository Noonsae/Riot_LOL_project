"use client";

import Head from "next/head";
import { Champion } from "@/types/champions";
import { useQuery } from "@tanstack/react-query";
import { fetchChampionRotationData } from "@/utils/rotateApi";
import { ChampionCard } from "@/components/champion/ChampionCard";

type RotationProps = {
  allPlayers: Champion[];
  newPlayers: Champion[];
};

export default function RotationPage() {
  const { data, isPending, error, refetch } = useQuery<RotationProps>({
    queryKey: ["championRotation"],
    queryFn: fetchChampionRotationData,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) {
    return ("로딩 중 입니당..");
  }

  if (error) {
    return ("엥.. 뭔가 이상한뎅.. ㅇㅅaㅇ;");
  }

  // 데이터가 성공적으로 로드되었을 경우 구조 분해
  const { allPlayers, newPlayers } = data as RotationProps;

  return (
    <>
      <Head>
        <title>금주 로테이션 챔피언</title>
        <meta
          name="description"
          content="Riot Games API를 활용하여 금주의 로테이션 정보를 제공합니다."
        />
        <meta property="og:title" content="금주 로테이션 정보" />
        <meta
          property="og:description"
          content="Riot Games API를 활용하여 금주의 로테이션 정보를 제공합니다."
        />
        <meta property="og:url" content="http://localhost:3000/rotation" />
      </Head>

      <article className="flex flex-col gap-10 min-h-screen pb-[200px] m-auto max-w-custom container">
        <div className="mb-5">
          <div className="text-3xl txt mb-10">
            <h2 className="text-3xl font-bold">금주 로테이션 챔피언</h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {allPlayers.map((champion: Champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </div>
        </div>
        
        <hr className="border border-[#ddd] dark:border-[#a1a1a1]"/>

        <div className="mt-5">
          <div className="txt pb-10">
            <h2 className="text-3xl font-bold">
              로테이션 챔피언 (신규)
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {newPlayers.map((champion: Champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
