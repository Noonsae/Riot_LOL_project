import { Metadata } from "next";

import FifthContent from "@/components/intro/FifthContent";
import SecondContent from "@/components/intro/SecondContent";
import ThirdContent from "@/components/intro/ThirdContent";
import FirstContent from "@/components/intro/FirstContent";
import FourthContent from "@/components/intro/FourthContent";

export const metadata: Metadata = {
  title: "League Of Legends : 게임소개",
  description: "Riot Games 리그오브 레전드에 오신 것을 환영합니다.",
  openGraph: {
    title: "League Of Legends : 게임 정보",
    description: "리그 오브 레전드의 게임 정보 소개 페이지",
  },
};

const IntroPage = async () => {
  return (
    <article>
      <section className="h-[640px] w-full bg-[url('/images/hero.webp')] bg-cover bg-center no-repeat absolute top-[80px] left-0 flex flex-row justify-center items-center text-center text-white shadow-lg">
        <div>
          <h2 className="text-[62px] font-bold text-shadow-lg mb-2">
            소환사의 협곡에 오신 것을 환영합니다.
          </h2>
          <p className="text-[26px] text-shadow-md">
            아래 가이드를 통해 가장 인기 있는 게임 모드를 간략히 배우실 수
            있습니다.
          </p>
        </div>
      </section>

      <section className="w-full mt-[560px]">
        <div className="text-center mx-auto flex flex-col items-center justify-center w-full h-[640px]">
          <h3 className="text-[64px] font-bold text-[#0a1428] dark:text-white mb-4 italic text-shadow-lg">
            리그 오브 레전드란?
          </h3>
          <p className="text-[18px] mb-2 text-shadow-md">
            리그 오브 레전드는 5명의 강력한 챔피언으로 구성된 양 팀이 서로의
            기지를 파괴하기 위해 치열한 사투를 벌이는 전략 게임입니다.
          </p>
          <p>
            140여 명의 챔피언 중 하나를 선택해 화려한 플레이를 펼치며 적을
            처치하고 포탑을 파괴해 승리를 쟁취하세요.
          </p>
        </div>
      </section>

      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
      <FifthContent />
      
    </article>
  );
};

export default IntroPage;
