"use client";

import { introContents } from "@/types/introContents";
import { useState } from "react";

const IntroContent = ({ title, description }: introContents) => {
  const [contentBackgroundImg, setContentBackgroundImg] = useState(""); // 초기 배경 스타일

  const handleChangeBackground = () => (backgroundStyle: string) => {
    setContentBackgroundImg(backgroundStyle); // 배경 스타일 업데이트
  };

  return (
    <section className="w-full h-[640px] border flex flex-row justify-between items-center">
      <div className="w-1/2 text-center">
        <h3 className="text-[64px] font-bold italic mb-2">{title}</h3>
        <p>{description}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleChangeBackground}
        >
          버튼 1
        </button>
        <button className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
          버튼 2
        </button>
      </div>
      <div
        className={`w-1/2 h-1/2 transition-all border duration-500 ${contentBackgroundImg}`}
      ></div>
    </section>
  );
};

export default IntroContent;
