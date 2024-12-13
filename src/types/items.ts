// 아이템 데이터를 나타내는 타입
export interface ItemDetails {
  [id: string]: {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    gold: {
      base: number;
      total: number;
      sell: number;
      purchasable: boolean;
    };
    tags: string[];
    maps: {
      [mapId: string]: boolean;
    };
    stats: {
      [statName: string]: number;
    };
    image: Image;
  };
}

// 이미지 데이터 타입
export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
