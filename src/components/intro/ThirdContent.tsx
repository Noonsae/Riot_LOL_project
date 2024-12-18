"use client";

import { useState } from "react";

const ThirdContent = () => {
  const [selectedContent, setSelectedContent] = useState("baron"); // 초기값은 "baron"

  const handleBackgroundChange = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSelectedContent(event.currentTarget.value); // 버튼의 value 값을 상태로 업데이트
  };

  return (
    <div className="flex flex-row justify-between items-center h-[640px]">
      {/* 버튼 그룹 */}
      <div className="w-[45%] h-full text-center flex flex-col items-center justify-center">
        <h3 className="text-[64px] font-bold italic mb-2">정글 둘러보기</h3>
        <p className="my-[20px]">
          공격로 사이에 있는 정글에는 중립 몬스터와 정글 식물이 살고 있습니다.
          <br />
          가장 중요한 몬스터는 내셔 남작과 드래곤입니다. 이 유닛을 처치하면 팀
          전체가 고유의 이로운 효과를 얻어 게임의 승세를 뒤집을 수도 있습니다.
        </p>

        <div className="flex flex-row w-full items-center justify-center gap-10 mt-4">
          <div>
            <button
              className="w-[60px] h-[60px] text-white rounded-full indent-[-9999px] bg-[url(/images/baron_btn.webp)] mb-4 bg-cover"
              value="baron"
              onClick={handleBackgroundChange}
            >
              내셔 남작
            </button>
            <p>내셔 남작</p>
          </div>

          <div>
            <button
              className="w-[60px] h-[60px] text-white rounded-full indent-[-9999px] bg-[url(/images/dragon_btn.webp)] mb-4 bg-cover"
              value="dragon" // 버튼 value로 "dragon" 설정
              onClick={handleBackgroundChange}
            >
              드래곤
            </button>
            <p>드래곤</p>
          </div>
        </div>
      </div>

      {/* 조건부 렌더링된 내용 */}
      <div
        className={`w-[45%] h-full flex flex-col justify-center items-center transition-all duration-500 text-center`}
      >
        {selectedContent === "baron" ? (
          // 바론 관련 내용
          <div>
            <div className="w-[500px] h-[350px] bg-[url(/images/ally.webp)] bg-no-repeat bg-contain bg-center -indent-[9999px]">
              내셔 남작
            </div>
            <p className="text-[36px] font-bold mb-[20px]">내셔 남작</p>
            <span>
              내셔 남작은 정글에서 가장 강력한 몬스터입니다. 내셔 남작을
              처치하면 해당 팀 전체가 공격력 및 주문력 증가, 귀환 강화 효과를
              얻으며, 챔피언 근처의 미니언이 강력해집니다.
            </span>
          </div>
        ) : (
          // 드래곤 관련 내용
          <div>
            <div className="w-[500px] h-[350px] bg-[url(/images/enemy.webp)] bg-no-repeat bg-contain bg-center -indent-[9999px]">
              드래곤
            </div>
            <p className="text-[36px] font-bold mb-[20px]">드래곤</p>
            <span>
              드래곤은 처치 시 원소 종류에 따라 고유의 추가 효과를 부여하는
              강력한 몬스터입니다. 5종류의 원소 드래곤과 장로 드래곤으로
              나뉩니다.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThirdContent;
