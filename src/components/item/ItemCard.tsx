import Image from "next/image";
import { getItemImgUrl } from "@/constants/apiUrls";
import { ItemDetails } from "@/types/items";

type ItemCardProps = {
  item: ItemDetails;
  version: string;
};

export function ItemCard({ item, version }: ItemCardProps) {
  const IMAGE_URL = item.image?.full
    ? getItemImgUrl(version, item.image.full)
    : "/images/lol1.jpg";

  return (
    <div
      className={`dark:bg-black dark:text-white dark:border dark:border-gray-600 border border-[#eee] shadow-lg flex flex-col items-center h-[200px] items-center justify-center bg-[#fefefe] rounded-md`}
    >
      {/* 이미지 */}
      <div>
        <Image
          src={IMAGE_URL}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-md"
        />
      </div>

      {/* 아이템명 및 설명 */}
      <div className="text-left mt-5">
        {/* 아이템명 */}
        <p className="text-sm font-semibold dark:text-white">{item.name}</p>
        <p className="text-sm dark:text-white">가격 : {item.gold.base}골드</p>
      </div>
    </div>
  );
}
