// 1.최신 버전 확인
async function fetchLatestVersion() {
  try {
    // 최신 버전 정보를 가져오기 위한 API 호출
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    // 응답 상태를 확인. 성공하지 않으면 에러 발생
    if (!res.ok) {
      throw new Error("버전 데이터를 가져오지 못했습니다.");
    }

    // JSON 형태로 데이터를 파싱
    const versions = await res.json();

    // 최신 버전(첫 번째 항목)을 반환
    return versions[0];
  } catch (error) {
    // 네트워크 오류 또는 API 실패 시 로그를 출력하고 에러를 다시 던짐
    console.error("Error fetching latest version:", error);
    throw new Error("네트워크 오류로 버전 데이터를 가져오지 못했습니다.");
  }
}

// 2.챔피언 정보 가져오기
export default async function fetchChampionData() {
  try {
    // 최신 버전 정보를 먼저 가져옴
    const latestVersion = await fetchLatestVersion();

    // 해당 버전에 대한 챔피언 정보를 가져오기 위한 API 호출
    const championVersions = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
    );

    // 응답 상태를 확인. 성공하지 않으면 에러 발생
    if (!championVersions.ok) {
      throw new Error("챔피언 정보를 가져오지 못했습니다.");
    }

    // JSON 형태로 데이터를 파싱
    const championData = await championVersions.json();

    // 데이터를 확인. 데이터가 없을 경우 에러 발생
    if (!championData.data) {
      throw new Error("챔피언 데이터가 비어있습니다.");
    }

    // 성공적으로 데이터를 가져오면 챔피언 데이터와 버전을 반환
    return {
      data: championData.data,
      version: latestVersion,
    };
  } catch (error) {
    // 네트워크 오류 또는 API 실패 시 로그를 출력하고 에러를 다시 던짐
    console.error("Error fetching champion data:", error);
    throw error;
  }
}

// 3.아이템 정보 가져오기
export async function fetchItemData() {
  try {
    // 최신 버전 정보를 먼저 가져옴
    const latestVersion = await fetchLatestVersion();

    // 해당 버전에 대한 아이템 정보를 가져오기 위한 API 호출
    const itemRes = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
    );

    // 응답 상태를 확인. 성공하지 않으면 에러 발생
    if (!itemRes.ok) {
      throw new Error("아이템 정보를 찾지 못했습니다.");
    }

    // JSON 형태로 데이터를 파싱
    const itemData = await itemRes.json();

    // 데이터를 확인. 데이터가 없을 경우 에러 발생
    if (!itemData.data) {
      throw new Error("아이템 데이터가 비어있습니다.");
    }

    // 성공적으로 데이터를 가져오면 아이템 데이터와 버전을 반환
    return {
      data: itemData.data,
      version: latestVersion,
    };
  } catch (error) {
    // 네트워크 오류 또는 API 실패 시 로그를 출력하고 에러를 다시 던짐
    console.error("Error fetching item data:", error);
    throw error;
  }
}
