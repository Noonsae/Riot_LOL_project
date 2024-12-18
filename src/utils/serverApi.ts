"use server";

import { ItemDetails } from "@/types/items";
import { API_URL, getDataUrl } from "@/constants/apiUrls";
import {
  Champion,
  ChampionDetails,
  ChampionDetailsResponse,
} from "@/types/champions";

// 1.최신 버전 확인
export async function fetchLatestVersion(): Promise<string> {
  try {
    // 최신 버전 정보를 가져오기 위한 API 호출
    const res = await fetch(`${API_URL}/api/versions.json`);

    // 응답 상태를 확인. 성공하지 않으면 에러 발생
    if (!res.ok) {
      throw new Error(`버전 데이터를 가져오지 못했습니다 : ${res.status}`);
    }

    // JSON 형태로 데이터를 파싱
    const versions: string = await res.json();

    // 최신 버전(첫 번째 항목)을 반환
    return versions[0];
  } catch (error: any) {
    // 네트워크 오류 또는 API 실패 시 로그를 출력하고 에러를 다시 던짐
    console.error(error.message);
    throw new Error("Error fetching latest version");
  }
}

// 2.챔피언 정보 가져오기
export async function fetchChampionData(): Promise<Champion[]> {
  try {
    // 최신 버전 정보를 먼저 가져옴
    const latestVersion = await fetchLatestVersion();

    // 해당 버전에 대한 챔피언 정보를 가져오기 위한 API 호출
    const championRes = await fetch(
      `${getDataUrl(latestVersion)}/champion.json`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );

    // 응답 상태를 확인. 성공하지 않으면 에러 발생
    if (!championRes.ok) {
      throw new Error(
        `챔피언 정보를 가져오지 못했습니다 : ${championRes.status}`
      );
    }

    // JSON 형태로 데이터를 파싱
    const championData = await championRes.json();

    const championList: Champion[] = Object.values(championData.data);
    return championList;
  } catch (error: any) {
    // 네트워크 오류 또는 API 실패 시 로그를 출력하고 에러를 다시 던짐
    console.error(error.message);
    throw new Error("Error fetching champion data");
  }
}

// 3. 특정 챔피언 상세 정보 가져오기
export async function fetchChampionDetails(
  id: string
): Promise<ChampionDetails> {
  try {
    // 최신 버전 정보를 먼저 가져옴
    const latestVersion = await fetchLatestVersion();

    // 해당 버전에 대한 챔피언 정보를 가져오기 위한 API 호출
    const championDetailRes = await fetch(
      `${getDataUrl(latestVersion)}/champion/${id}.json`
    );

    // 응답 상태를 확인. 성공하지 않으면 에러 발생
    if (!championDetailRes.ok) {
      throw new Error(
        `챔피언 상세 정보를 가져오지 못했습니다 : ${championDetailRes.status}`
      );
    }

    // JSON 형태로 데이터를 파싱
    const championDetailData: ChampionDetailsResponse =
      await championDetailRes.json();

    const championDetails = championDetailData.data[id];
    return championDetails;
  } catch (error: any) {
    // 네트워크 오류 또는 API 실패 시 로그를 출력하고 에러를 다시 던짐
    console.error(error.message);
    throw new Error("Error fetching champion details");
  }
}

// 4.아이템 정보 가져오기
export async function fetchItemData(): Promise<ItemDetails[]> {
  try {
    // 최신 버전 정보를 먼저 가져옴
    const latestVersion = await fetchLatestVersion();

    // 해당 버전에 대한 아이템 정보를 가져오기 위한 API 호출
    const itemRes = await fetch(`${getDataUrl(latestVersion)}/item.json`, {
      cache: "force-cache",
    });

    // 응답 상태를 확인. 성공하지 않으면 에러 발생
    if (!itemRes.ok) {
      throw new Error(`아이템 정보를 찾지 못했습니다 : ${itemRes.status}`);
    }

    // JSON 형태로 데이터를 파싱
    const itemData = await itemRes.json();

    // 성공적으로 데이터를 가져오면 아이템 데이터를 반환
    const items: ItemDetails[] = Object.values(itemData.data);
    return items;
  } catch (error: any) {
    // 네트워크 오류 또는 API 실패 시 로그를 출력하고 에러를 다시 던짐
    console.error(error.message);
    throw new Error("Error fetching Item data");
  }
}
