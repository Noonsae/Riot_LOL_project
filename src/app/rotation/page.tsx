"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { ChampionDetails } from "@/types/champions";
import { ChampionRotation } from "@/types/rotation";

export default function RotationPage() {
  // 로테이션 데이터, 로딩 상태, 에러 메시지, 챔피언 데이터를 위한 상태값
  const [rotationData, setRotationData] = useState<ChampionRotation | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [championData, setChampionData] = useState<ChampionDetails | null>(
    null
  );

  useEffect(() => {
    async function fetchRotation() {
      setLoading(true); // 로딩 상태 시작
      setError(null); // 기존 에러 초기화

      try {
        // 1. 로테이션 데이터 가져오기
        const rotationRes = await fetch("/api/rotation");
        if (!rotationRes.ok) {
          throw new Error("로테이션 데이터를 가져오는데 실패했습니다.");
        }
        const rotation: ChampionRotation = await rotationRes.json();
        setRotationData(rotation);

        // 2. 챔피언 데이터 가져오기
        const championRes = await fetch("/api/championData");
        if (!championRes.ok) {
          throw new Error("챔피언 데이터를 가져오는데 실패했습니다.");
        }
        const { data: champions }: { data: ChampionDetails } =
          await championRes.json();
        setChampionData(champions);
      } catch (err) {
        // API 호출 중 발생한 에러 처리
        setError((err as Error).message);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    }
    fetchRotation();
  }, []);

  // 로딩 상태일 때
  if (loading) {
    return <p>로딩중임당...^-^)b</p>;
  }

  // 에러 발생 시
  if (error) {
    return <p>엥? 뭔가 이상한뎅...ㅠ^ㅠ)p</p>;
  }

  // 데이터가 없을 경우
  if (!rotationData || !championData) {
    return <p>데이터를 찾을 수 없습니다. 다시 시도 해주세요.</p>;
  }

  // 정상적으로 데이터를 불러왔을 경우
  return (
    <ul>
      {rotationData?.freeChampionIdsForNewPlayers.map((id) => {
        // 로테이션 챔피언 ID와 일치하는 챔피언 데이터 찾기
        const champ = championData
          ? Object.values(championData).find(
              (champion) => parseInt(champion.key) === id
            )
          : null;
        if (!champ) return null;

        // 챔피언 정보 렌더링
        return (
          <li key={id} className="grid grid-cols-10 gap-4">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`}
              alt={champ.name}
              width={100}
              height={100}
            />
            <p>{champ.name}</p>
            <p>{champ.title}</p>
          </li>
        );
      })}
    </ul>
  );
}
