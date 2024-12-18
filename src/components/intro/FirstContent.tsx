"use client"

import { useState } from "react";

const FirstContent = () => {
  const [selectedContent, setSelectedContent] = useState("ally"); // 초기값은 "ally"

  const handleBackgroundChange = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSelectedContent(event.currentTarget.value); // 버튼의 value 값을 상태로 업데이트
  };

  return (
    <div className="flex flex-row justify-between items-center h-[640px] ">
      {/* 버튼 그룹 */}
      <div className="w-[45%] h-full text-center flex flex-col items-center justify-center">
        <h3 className="text-[64px] font-bold italic mb-2">기지 파괴하기</h3>
        <p className="my-[20px]">
          넥서스는 양 팀 기지의 심장부입니다.
          <br />
          적의 넥서스를 먼저 파괴하는 팀이 게임에서 승리합니다.
        </p>

        <div className="flex flex-row w-full items-center justify-center gap-10 mt-4">
          <div>
            <button
              className="w-[60px] h-[60px] text-white rounded-full indent-[-9999px] bg-[url(/images/ally_btn.webp)] mb-4 bg-cover"
              value="ally" // 버튼 value로 "ally" 설정
              onClick={handleBackgroundChange}
            >
              아군 넥서스
            </button>
            <p>아군 넥서스</p>
          </div>

          <div>
            <button
              className="w-[60px] h-[60px] text-white rounded-full indent-[-9999px] bg-[url(/images/enemy_btn.webp)] mb-4 bg-cover"
              value="enemy" // 버튼 value로 "enemy" 설정
              onClick={handleBackgroundChange}
            >
              적팀 넥서스
            </button>
            <p>적팀 넥서스</p>
          </div>
        </div>
      </div>

      {/* 조건부 렌더링된 내용 */}
      <div
        className={`w-[45%] h-full flex flex-col justify-center items-center transition-all duration-500 text-center`}
      >
        {selectedContent === "ally" ? (
          // 아군 넥서스 내용
          <div>
            <div className="w-[500px] h-[350px] bg-[url(/images/ally.webp)] bg-no-repeat bg-contain bg-center -indent-[9999px]">
              아군 넥서스
            </div>
            <p className="text-[36px] font-bold mb-[20px]">아군 넥서스</p>
            <span>
              넥서스에서 미니언이 생성됩니다. 넥서스 뒤에 있는 소환사의 제단에서
              체력과 마나를 빠르게 회복하고 상점을 이용할 수 있습니다.
            </span>
          </div>
        ) : (
          // 적팀 넥서스 내용
          <div>
            <div className="w-[500px] h-[350px] bg-[url(/images/enemy.webp)] bg-no-repeat bg-contain bg-center -indent-[9999px]">
              적팀 넥서스
            </div>
            <p className="text-[36px] font-bold mb-[20px]">적팀 넥서스</p>
            <span>
              적팀 기지에는 아군과 동일한 넥서스가 있습니다. 적팀 넥서스를
              파괴하면 게임에서 승리합니다.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstContent;
