// 챔피언 디테일 데이터를 나타내는 타입
export interface ChampionDetails {
  id: string;
  name: string;
  title: string;
  lore: string;
  blurb: string;
  tags: string[];
  partype: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  spells: Spell[];
  passive: Passive;
  skins: Skin[];
}

// 스펠 데이터 타입
export interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  cooldown: number[];
  cost: number[];
  range: number[];
  image: Image;
}

// 패시브 데이터 타입
export interface Passive {
  name: string;
  description: string;
  image: Image;
}

// 스킨 데이터 타입
export interface Skin {
  id: string;
  name: string;
  num: number;
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