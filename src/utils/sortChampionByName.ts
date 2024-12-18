import { Champion } from "@/types/champions";

export const sortChampionsByName = (champions: Champion[]): Champion[] => {
  return champions.sort((a, b) => {
    if (a.name < b.name) return -1; // a가 b보다 앞에 위치
    if (a.name > b.name) return 1; // a가 b보다 뒤에 위치
    return 0; // a와 b가 같으면 변경 없음
  });
};
