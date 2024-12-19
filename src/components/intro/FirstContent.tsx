"use client";

import { useState } from "react";

type ContentData = {
  [key: string]: {
    title: string;
    description: string;
    image: string;
  };
};

const FirstContent = () => {
  const [selectedContent, setSelectedContent] = useState<string>("ally");

  const contentData: ContentData = {
    ally: {
      title: "아군 넥서스",
      description:
        "넥서스에서 미니언이 생성됩니다. 넥서스 뒤에 있는 소환사의 제단에서 체력과 마나를 빠르게 회복하고 상점을 이용할 수 있습니다.",
      image: "/images/ally.webp",
    },
    enemy: {
      title: "적팀 넥서스",
      description:
        "적팀 기지에는 아군과 동일한 넥서스가 있습니다. 적팀 넥서스를 파괴하면 게임에서 승리합니다.",
      image: "/images/enemy.webp",
    },
  };

  const currentContent = contentData[selectedContent];

  return (
    <div className="flex flex-row justify-between items-center h-[640px]">
      {/* 버튼 그룹 */}
      <div className="w-[45%] h-full text-center flex flex-col items-center justify-center">
        <h3 className="text-[64px] font-bold italic mb-2">기지 파괴하기</h3>
        <p className="my-[20px]">
          넥서스는 양 팀 기지의 심장부입니다.
          <br />
          적의 넥서를 먼저 파괴하는 팀이 게임에서 승리합니다.
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
                onClick={(e) => setSelectedContent(e.currentTarget.value)}
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

export default FirstContent;
