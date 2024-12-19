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

const SecondContent = () => {
  const [selectedContent, setSelectedContent] = useState<string>("tower");

  const contentData: ContentData = {
    tower: {
      title: "포탑",
      description:
        "포탑은 적 미니언과 챔피언을 공격하고, 아군이 전장의 안개로 가려진 지역을 볼 수 있게 해 줍니다. 미니언 뒤에 서서 포탑을 공격하면 피해를 입지 않고 파괴할 수 있습니다.",
      background: "/images/tower_bg.webp",
      buttonBackground: "/images/tower_btn.webp",
    },
    inhibitor: {
      title: "억제기",
      description:
        "각 억제기는 포탑이 보호하고 있습니다. 억제기가 파괴되면 해당 공격로에서 몇 분간 슈퍼 미니언이 생성됩니다. 시간이 지나면 억제기가 재생성되며, 슈퍼 미니언 생성이 중단됩니다.",
      background: "/images/inhibitor_bg.webp",
      buttonBackground: "/images/inhibitor_btn.webp",
    },
  };

  const currentContent = contentData[selectedContent];

  return (
    <div className="flex flex-row justify-between items-center h-[640px]">
      {/* 버튼 그룹 */}
      <div className="w-[45%] h-full text-center flex flex-col items-center justify-center">
        <h3 className="text-[64px] font-bold italic mb-2">공격로 장악하기</h3>
        <p className="my-[20px]">
          적팀 넥서스에 도달하려면 최소 1개의 공격로를 장악해야 합니다.
          <br />
          공격로에는 포탑과 억제기라는 방어용 구조물이 있습니다. 각 공격로에는
          3개의 포탑과 1개의 억제기가 있으며, 넥서스는 2개의 포탑이 지키고
          있습니다.
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

export default SecondContent;
