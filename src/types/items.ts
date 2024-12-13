// 아이템 데이터를 나타내는 타입
export interface ItemDetails {
  name: string;
  description: string;
  plaintext?: string;
  image?: {
    full?: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold?: {
    base: number;
    purchasable: boolean;
    total?: number;
    sell?: number;
  };
}