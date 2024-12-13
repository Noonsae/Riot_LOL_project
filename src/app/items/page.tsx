import { fetchItemData } from "@/utils/serverApi";
import Image from "next/image";
import { ItemDetails } from "@/types/items";

export const revalidate = 86400;

export default async function Items() {
  const itemRes = await fetchItemData();
  const items: Record<string, ItemDetails> = itemRes.data;
  const version: string = itemRes.version;

  return (
    <div>
      <ul className="grid grid-cols-5 gap-4">
        {Object.entries(items).map(([id, item]) => (
          <li
            key={id}
            className="flex-col justify-center items-center gap-4 border p-4 rounded-md shadow-md bg-white"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${
                item.image?.full || "default.png"
              }`}
              alt={item.name || "아이템"}
              width={50}
              height={50}
              style={{
                marginRight: "10px",
              }}
            />
            <p className="text-lg font-semibold mb-2">
              {item.name || "알 수 없는 아이템"}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              {item.plaintext || "설명이 없습니다."}
            </p>
            <p className="text-sm">
              구매가격: {item.gold?.total || 0} / 판매가격:{" "}
              {item.gold?.sell || 0}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
