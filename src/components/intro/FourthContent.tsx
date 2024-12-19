"use client";

import { useState } from "react";

const FourthContent = () => {
  const [selectedContent, setSelectedContent] = useState("top"); // 초기값은 "top"

  const handleBackgroundChange = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSelectedContent(event.currentTarget.value); // 버튼의 value 값을 상태로 업데이트
  };

  const contentData: {
    [key: string]: { title: string; description: string; image: string };
  } = {
    top: {
      title: "상단 공격로",
      description:
        "상단 공격로의 챔피언은 홀로 싸울 수 있는 강력한 챔피언입니다. 공격로를 지키고 적팀의 가장 강력한 챔피언을 노리는 것이 주된 임무입니다.",
      image: "/images/top.webp",
    },
    jungle: {
      title: "정글",
      description:
        "정글러는 사냥 전문가입니다. 공격로 사이를 민첩하게 숨어다니며 중요한 중립 몬스터를 사냥하고, 적이 긴장을 늦추는 순간을 노려 기습합니다.",
      image: "/images/jungle.webp",
    },
    mid: {
      title: "중단 공격로",
      description:
        "중단 공격로 챔피언은 순식간에 폭발적인 피해를 입힐 수 있으며 혼자일 때에도, 팀 전투에서도 강력합니다. 항상 적을 공격하기 전에 신중히 기회를 노려야 하는 포지션입니다.",
      image: "/images/mid.webp",
    },
    bottom: {
      title: "하단 공격로",
      description:
        "하단 공격로 챔피언은 팀의 주된 공격수입니다. 초반에는 약하기 때문에 보호를 받으며 골드와 경험치를 모아 팀을 승리로 이끌게 됩니다.",
      image: "/images/bottom.webp",
    },
    support: {
      title: "서포터",
      description:
        "서포터 챔피언은 아군을 보호합니다. 아군이 죽지 않도록 보조하고 적을 더욱 쉽게 처치할 수 있도록 도우며, 하단 공격로의 아군이 성장할 때까지 보호합니다.",
      image: "/images/support.webp",
    },
  };

  const currentContent = contentData[selectedContent];

  return (
    <div className="flex flex-row justify-between items-center h-[640px]">
      {/* 버튼 그룹 */}
      <div className="w-[45%] h-full text-center flex flex-col items-center justify-center">
        <h3 className="text-[64px] font-bold italic mb-2">공격로 선택하기</h3>
        <p className="my-[20px]">
          게임에서 권장하는 팀 구성 포지션은 5가지입니다.
          <br />
          공격로마다 어울리는 챔피언과 역할군이 있습니다.
          <br />
          모두 플레이해 보거나 원하는 공격로를 선택하세요.
        </p>

        <div className="flex flex-row w-full items-center justify-center gap-10 mt-4">
          {Object.keys(contentData).map((key) => (
            <div key={key}>
              <button
                className={`w-[60px] h-[60px] text-white rounded-full indent-[-9999px] mb-4 bg-cover transform transition-transform duration-200 hover:scale-110 ${
                  selectedContent === key ? "ring-4 ring-blue-500" : ""
                }`}
                style={{
                  backgroundImage: `url(/images/${key}_btn.webp)`,
                }}
                value={key}
                onClick={handleBackgroundChange}
              >
                {contentData[key].title}
              </button>
              <p>{contentData[key].title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 조건부 렌더링된 내용 */}
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

export default FourthContent;
