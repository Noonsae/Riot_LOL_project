import ContentCard from "./ContentCard";

const data = [
  {
    href: "/intro",
    imageSrc: "/images/Teemo.webp",
    alt: "게임소개 이미지",
    title: "게임소개",
  },
  {
    href: "/champions",
    imageSrc: "/images/Ornn.webp",
    alt: "챔피언 목록 이미지",
    title: "챔피언 목록 보기",
  },
  {
    href: "/items",
    imageSrc: "/images/Lillia.webp",
    alt: "아이템 목록 이미지",
    title: "아이템 목록 보기",
  },
  {
    href: "/rotation",
    imageSrc: "/images/Ashe.webp",
    alt: "로테이션 이미지",
    title: "금주 로테이션",
  },
];

// 함수 표현식으로 작성
const ContentCardList = () => {
  return (
    <ul className="grid gap-6 grid-cols-2 lg:grid-cols-4 items-center justify-items-center">
      {data.map((card) => (
        <ContentCard
          key={card.href}
          href={card.href}
          imageSrc={card.imageSrc}
          alt={card.alt}
          title={card.title}
        />
      ))}
    </ul>
  );
};

export default ContentCardList;
