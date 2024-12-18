"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchChampionRotationData } from "@/utils/rotateApi";
import { sortChampionsByName } from "@/utils/sortChampionByName";

import { Champion } from "@/types/champions";

import ChampionCardList from "@/components/champion/ChampionList";
import { RotationSEO } from "@/components/rotation/RotationSEO";

import Loading from "../loading";
import Error from "../Error";

type RotationProps = {
  allPlayers: Champion[];
  newPlayers: Champion[];
};

const RotationPage = () => {
  const { data, isPending, error, refetch } = useQuery<RotationProps>({
    queryKey: ["championRotation"],
    queryFn: fetchChampionRotationData,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return (
      <Error
        error={error as Error} // 에러 객체 전달
        reset={() => refetch()}
      />
    );
  }

  const sortedAllPlayers = data?.allPlayers
    ? sortChampionsByName(data.allPlayers)
    : [];
  const sortedNewPlayers = data?.newPlayers
    ? sortChampionsByName(data.newPlayers)
    : [];

  return (
    <>
      <RotationSEO />

      <article className="flex flex-col gap-10 min-h-screen pb-[200px] m-auto max-w-custom container">
        <ChampionCardList
          title="금주 로테이션 챔피언"
          champions={sortedAllPlayers}
        />

        <hr className="border border-[#ddd] dark:border-[#a1a1a1]" />

        <ChampionCardList
          title="로테이션 챔피언 (신규)"
          champions={sortedNewPlayers}
        />
      </article>
    </>
  );
};

export default RotationPage;
