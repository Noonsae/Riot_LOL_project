// Intro 섹션 콘텐츠

import { introContents } from "@/types/introContents";

export const sections: introContents[] = [
  {
    title: "기지 파괴하기",
    description: `
      넥서스는 양 팀 기지의 심장부입니다.
      적의 넥서스를 먼저 파괴하는 팀이 게임에서 승리합니다.
    `,
    icon_name_01: `아군 넥서스`,
    icon_name_02: `아군 넥서스`,
    icon_description_01:
      "넥서스에서 미니언이 생성됩니다. 넥서스 뒤에 있는 소환사의 제단에서 체력과 마나를 빠르게 회복하고 상점을 이용할 수 있습니다.",
    icon_description_02:
      "적팀 기지에는 아군과 동일한 넥서스가 있습니다. 적팀 넥서스를 파괴하면 게임에서 승리합니다.",
    btn_img_01: "../images/ally_btn.webp",
    btn_img_02: "../images/enemy_btn.webp",
    content_img_01: "../images/ally.webp",
    content_img_02: "../images/enemy.webp",
  },
  {
    title: "공격로 장악하기",
    description: `
      적팀 넥서스에 도달하려면 최소 1개의 공격로를 장악해야 합니다.
      공격로에는 포탑과 억제기라는 방어용 구조물이 있습니다. 각 공격로에는
      3개의 포탑과 1개의 억제기가 있으며, 넥서스는 2개의 포탑이 지키고 있습니다.
    `,
    icon_name_01: `포탑`,
    icon_name_02: `억제기`,
    icon_description_01:
      "포탑은 적 미니언과 챔피언을 공격하고, 아군이 전장의 안개로 가려진 지역을 볼 수 있게 해 줍니다. 미니언 뒤에 서서 포탑을 공격하면 피해를 입지 않고 파괴할 수 있습니다.",
    icon_description_02:
      "각 억제기는 포탑이 보호하고 있습니다. 억제기가 파괴되면 해당 공격로에서 몇 분간 슈퍼 미니언이 생성됩니다. 시간이 지나면 억제기가 재생성되며, 슈퍼 미니언 생성이 중단됩니다.",
    btn_img_01: "../images/tower_btn.webp",
    btn_img_02: "../images/inhibitor_btn.webp",
    content_img_01: "../images/tower_bg.webp",
    content_img_02: "../images/inhibitor_bg.webp",
  },
  {
    title: "정글 둘러보기",
    description: `
      적팀 넥서스에 도달하려면 최소 1개의 공격로를 장악해야 합니다.
      공격로에는 포탑과 억제기라는 방어용 구조물이 있습니다. 각 공격로에는
      3개의 포탑과 1개의 억제기가 있으며, 넥서스는 2개의 포탑이 지키고 있습니다.
    `,
    icon_name_01: `내셔 남작`,
    icon_name_02: `드래곤`,
    icon_description_01:
      "포탑은 적 미니언과 챔피언을 공격하고, 아군이 전장의 안개로 가려진 지역을 볼 수 있게 해 줍니다. 미니언 뒤에 서서 포탑을 공격하면 피해를 입지 않고 파괴할 수 있습니다.",
    icon_description_02:
      "각 억제기는 포탑이 보호하고 있습니다. 억제기가 파괴되면 해당 공격로에서 몇 분간 슈퍼 미니언이 생성됩니다. 시간이 지나면 억제기가 재생성되며, 슈퍼 미니언 생성이 중단됩니다.",
    btn_img_01: "../images/baron_btn.webp",
    btn_img_02: "../images/dragon_btn.webp",
    content_img_01: "../images/baron.webp",
    content_img_02: "../images/dragon.webp",
  },
  {
    title: "공격로 선택하기",
    description: `
      공격로 사이에 있는 정글에는 중립 몬스터와 정글 식물이 살고 있습니다.
      가장 중요한 몬스터는 내셔 남작과 드래곤입니다. 이 유닛을 처치하면 팀
      전체가 고유의 이로운 효과를 얻어 게임의 승세를 뒤집을 수도 있습니다.
    `,
    icon_name_01: `상단 공격로`,
    icon_name_02: `정글`,
    icon_name_03: "중단 공격로",
    icon_name_04: "하단 공격로",
    icon_name_05: "서포터",
    icon_description_01:
      "상단 공격로의 챔피언은 홀로 싸울 수 있는 강력한 챔피언입니다. 공격로를 지키고 적팀의 가장 강력한 챔피언을 노리는 것이 주된 임무입니다.",
    icon_description_02:
      "정글러는 사냥 전문가입니다. 공격로 사이를 민첩하게 숨어다니며 중요한 중립 몬스터를 사냥하고, 적이 긴장을 늦추는 순간을 노려 기습합니다.",
    icon_description_03:
      "중단 공격로 챔피언은 순식간에 폭발적인 피해를 입힐 수 있으며 혼자일 때에도, 팀 전투에서도 강력합니다. 항상 적을 공격하기 전에 신중히 기회를 노려야 하는 포지션입니다.",
    icon_description_04:
      "하단 공격로 챔피언은 팀의 주된 공격수입니다. 초반에는 약하기 때문에 보호를 받으며 골드와 경험치를 모아 팀을 승리로 이끌게 됩니다.",
    icon_description_05:
      "서포터 챔피언은 아군을 보호합니다. 아군이 죽지 않도록 보조하고 적을 더욱 쉽게 처치할 수 있도록 도우며, 하단 공격로의 아군이 성장할 때까지 보호합니다.",
    btn_img_01: "../images/top_btn.webp",
    btn_img_02: "../images/jungle_btn.webp",
    btn_img_03: "../images/mid_btn.webp",
    btn_img_04: "../images/bottom_btn.webp",
    btn_img_05: "../images/support_btn.webp",
    content_img_01: "../images/top.webp",
    content_img_02: "../images/jungle.webp",
    content_img_03: "../images/mid.webp",
    content_img_04: "../images/bottom.webp",
    content_img_05: "../images/support.webp",
  },
  {
    title: "스킬 사용하기",
    description: `
      챔피언은 5개의 주요 스킬과 2개의 소환사 주문을 사용할 수 있으며, 한 번에 최대 7개의 아이템을 소지할 수 있습니다. 챔피언에게 가장 어울리는 스킬 순서, 소환사 주문, 아이템 빌드를 이용해 아군에게 도움이 되는 팀원이 되어 보세요.
    `,
    icon_name_01: `스킬`,
    icon_name_02: `소환사 주문`,
    icon_name_03: "아이템",
    icon_description_01:
      "대부분의 챔피언은 기본 지속 효과, 3개의 기본 스킬, 궁극기로 이루어진 5개의 고유 스킬을 가지고 있습니다. 스킬 사용 기본 키는 Q, W, E, R입니다.",
    icon_description_02:
      "소환사 주문은 고유 효과를 가진 스킬입니다. D, F 키로 사용할 수 있습니다. 소환사 주문에는 여러 가지가 있으며, 주로 점멸, 순간이동, 강타, 점화가 사용됩니다.",
    icon_description_03:
      "아이템으로 이동 속도 및 피해량 증가, 스킬 재사용 대기시간 감소 등의 효과를 부여해 챔피언을 더 강력하게 만들 수 있습니다. 장신구와 달리, 골드를 소모해 구매해야 합니다.",
    btn_img_01: "../images/skill_icon.webp",
    btn_img_02: "../images/spell_icon.webp",
    btn_img_03: "../images/item_icon.webp",
    content_img_01: "../images/skill.webp",
    content_img_02: "../images/spell.webp",
    content_img_03: "../images/item.webp",
  },
];
