"use client";

import { useState } from "react";

// 타입 정의
type ContentData = {
  [key: string]: {
    title: string;
    description: string;
    background: string;
    buttonBackground: string;
  };
};

const ThirdContent = () => {
  // 초기 상태를 "baron"으로 설정하고 상태 타입을 string으로 지정
  const [selectedContent, setSelectedContent] = useState<string>("baron");

  // contentData 객체에 타입 ContentData를 적용
  const contentData: ContentData = {
    baron: {
      title: "내셔 남작",
      description:
        "내셔 남작은 정글에서 가장 강력한 몬스터입니다. 내셔 남작을 처치하면 해당 팀 전체가 공격력 및 주문력 증가, 귀환 강화 효과를 얻으며, 챔피언 근처의 미니언이 강력해집니다.",
      background: "/images/ally.webp",
      buttonBackground: "/images/baron_btn.webp",
    },
    dragon: {
      title: "드래곤",
      description:
        "드래곤은 처치 시 원소 종류에 따라 고유의 추가 효과를 부여하는 강력한 몬스터입니다. 5종류의 원소 드래곤과 장로 드래곤으로 나뉩니다.",
      background: "/images/enemy.webp",
      buttonBackground: "/images/dragon_btn.webp",
    },
  };

  // 현재 선택된 콘텐츠 데이터
  const currentContent = contentData[selectedContent];

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
          {Object.keys(contentData).map((key) => (
            <div key={key}>
              <button
                className={`w-[60px] h-[60px] text-white rounded-full indent-[-9999px] mb-4 bg-cover ${
                  selectedContent === key ? "ring-4 ring-blue-500" : ""
                }`}
                style={{
                  backgroundImage: `url(${contentData[key].buttonBackground})`,
                }}
                value={key}
                onClick={(e) => setSelectedContent(e.currentTarget.value)}
              >
                {contentData[key].title}
              </button>
              <p>{contentData[key].title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 조건부 렌더링된 내용 */}
      <div className="w-[45%] h-full flex flex-col justify-center items-center transition-all duration-500 text-center">
        <div
          className="w-[500px] h-[350px] bg-no-repeat bg-contain bg-center -indent-[9999px]"
          style={{
            backgroundImage: `url(${currentContent.background})`,
          }}
        >
          {currentContent.title}
        </div>
        <p className="text-[36px] font-bold mb-[20px]">
          {currentContent.title}
        </p>
        <span>{currentContent.description}</span>
      </div>
    </div>
  );
};

export default ThirdContent;
