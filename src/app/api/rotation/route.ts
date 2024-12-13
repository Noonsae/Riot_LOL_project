import { NextResponse } from "next/server";

export async function GET() {
  const RIOT_API_KEY = process.env.RIOT_API_KEY;
  const RIOT_API_URL =
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";

  if (!RIOT_API_KEY) {
    return NextResponse.json(
      { error: "Riot API key is missing in environment variables." },
      { status: 500 }
    );
  };

  try {
    const response = await fetch(RIOT_API_URL, {
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    });

    if (!response) {
      throw new Error("패치 데이터가 없습니다");
    };

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  };
};
