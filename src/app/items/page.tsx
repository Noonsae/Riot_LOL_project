import { Metadata } from "next";
import { ItemDetails } from "@/types/items";
import { ItemCard } from "@/components/item/ItemCard";
import { fetchItemData, fetchLatestVersion } from "@/utils/serverApi";

export const metadata: Metadata = {
  title: "League Of Legends : 아이템 목록",
  description:
    "Riot Games API를 이용해 리그 오브 레전드의 모든 아이템 목록을 확인하세요.",
  openGraph: {
    title: "League Of Legends : 아이템 목록",
    description: "리그 오브 레전드의 모든 아이템 정보 제공",
  },
};

export default async function ItemsPage() {
  const version: string = await fetchLatestVersion();
  const items: ItemDetails[] = await fetchItemData();

  return (
    <article>
      <div>
        <h2 className="text-3xl font-bold">아이템 목록</h2>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 flex flex-col gap-10 w-full max-w-[1200px] mt-10 pb-[100px]">
        {items.map((item: ItemDetails) => (
          <ItemCard key={`item-${item.id}`} item={item} version={version} />
        ))}
      </div>
    </article>
  );
}
