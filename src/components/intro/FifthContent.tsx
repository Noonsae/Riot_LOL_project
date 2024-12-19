"use client";

import { useState } from "react";

// 콘텐츠 데이터 타입 정의
type ContentData = {
  [key: string]: {
    title: string;
    description: string;
    image: string;
  };
};

const FifthContent = () => {
  // 초기 상태를 "ally"로 설정하고 상태 타입을 string으로 명시
  const [selectedContent, setSelectedContent] =
    useState<keyof ContentData>("skill");

  // contentData 객체의 타입을 ContentData로 지정
  const contentData: ContentData = {
    skill: {
      title: "스킬",
      description:
        "대부분의 챔피언은 기본 지속 효과, 3개의 기본 스킬, 궁극기로 이루어진 5개의 고유 스킬을 가지고 있습니다. 스킬 사용 기본 키는 Q, W, E, R입니다.",
      image: "/images/skill.webp",
    },
    spell: {
      title: "소환사주문",
      description:
        "소환사 주문은 고유 효과를 가진 스킬입니다. D, F 키로 사용할 수 있습니다. 소환사 주문에는 여러 가지가 있으며, 주로 점멸, 순간이동, 강타, 점화가 사용됩니다.",
      image: "/images/spell.webp",
    },
    item: {
      title: "아이템",
      description:
        "아이템으로 이동 속도 및 피해량 증가, 스킬 재사용 대기시간 감소 등의 효과를 부여해 챔피언을 더 강력하게 만들 수 있습니다. 장신구와 달리, 골드를 소모해 구매해야 합니다.",
      image: "/images/item.webp",
    },
  };

  // 현재 선택된 콘텐츠 데이터를 contentData에서 추출
  const currentContent = contentData[selectedContent];

  return (
    <div className="flex flex-row justify-between items-center h-[640px] mb-[150px]">
      {/* 버튼 그룹 */}
      <div className="w-[45%] h-full text-center flex flex-col items-center justify-center">
        <h3 className="text-[64px] font-bold italic mb-2">스킬 사용하기</h3>
        <p className="my-[20px]">
          챔피언은 5개의 주요 스킬과 2개의 소환사 주문을 사용할 수 있으며, 한
          번에 최대 7개의 아이템을 소지할 수 있습니다. 챔피언에게 가장 어울리는
          스킬 순서, 소환사 주문, 아이템 빌드를 이용해 아군에게 도움이 되는
          팀원이 되어 보세요.
        </p>

        <div className="flex flex-row w-full items-center justify-center gap-10 mt-4">
          {Object.keys(contentData).map((key) => (
            <div key={key}>
              <button
                className={`w-[60px] h-[60px] text-white rounded-full indent-[-9999px] mb-4 bg-cover ${
                  selectedContent === key ? "ring-4 ring-blue-500" : ""
                }`}
                style={{
                  backgroundImage: `url(/images/${key}_btn.webp)`,
                }}
                value={key}
                onClick={(e) =>
                  setSelectedContent(e.currentTarget.value as keyof ContentData)
                }
              >
                {contentData[key].title}
              </button>
              <p>{contentData[key].title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 렌더링된 콘텐츠 */}
      <div
        className={`w-[45%] h-full flex flex-col justify-center items-center transition-all duration-500 text-center`}
      >
        <div
          className="w-[500px] h-[350px] bg-no-repeat bg-contain bg-center -indent-[9999px]"
          style={{
            backgroundImage: `url(${currentContent.image})`,
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

export default FifthContent;
